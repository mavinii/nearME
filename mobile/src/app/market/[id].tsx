import { useEffect, useState } from 'react'
import { View, Alert, Modal } from "react-native"
import { router, useLocalSearchParams, Redirect } from "expo-router"
import { useCameraPermissions, CameraView } from 'expo-camera';

import { Button } from "@/components/button"
import { Loading } from "@/components/loading"
import { Cover } from '@/components/market/cover'
import { Coupon } from "@/components/market/coupon"
import { Details, PropDetails } from "@/components/market/details"

import { api } from "@/services/api"

type DataProps = PropDetails & {
    cover: string
}

export default function Market(){
    const [data, setData] = useState<DataProps>()
    const [coupon, setCoupon] = useState<string | null>(null)
    const [couponIsFetching, setCouponIsFetching] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)

    const [_, requestPermission] = useCameraPermissions()
    const params = useLocalSearchParams<{ id: string }>()

    // Fetch market data
    async function fetchMarket(){
        try {
            const { data } = await api.get(`/markets/${params.id}`)
            setData(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            Alert.alert("Error", "Something went wrong", [
                {
                    text: "OK", 
                    onPress: () => router.back()
                },
            ])
        }
    }

    // Handle open camera
    async function handleOpenCamera(){
        try {
            const { granted } = await requestPermission()

            if(!granted){
                return Alert.alert("Camera", "Please allow camera to read the QR Code. Go to: Settings > Apps > NearME > Permissions > Camera.")
            }

            setIsVisibleCameraModal(true)
        } catch (error) {
            console.log(`Caera, Access Denied!: ${error}`)
            Alert.alert("Camera", "Access Denied!")
        }
    }

    // QR Code Scanner
    async function handleQRCodeScanner(id: string){
        try {
            setCouponIsFetching(true)

            const { data } = await api.patch(`/coupons/${id}`)

            Alert.alert("Success", "Coupon has been redeemed!", data.coupon)
            setCoupon(data.coupon)
        } catch (error) {
            console.log(`QR Code is invalid! ${error}`)
            Alert.alert("Error", "QR Code is invalid!")
        } finally {
            setCouponIsFetching(false)
        }
    }

    useEffect(() => {
        fetchMarket()
    }, [params.id])

    if(isLoading){
        return <Loading />
    }

    if(!data){
        return <Redirect href="/home" />
    }

    return (
        <View style={{ flex: 1 }}>
            <Cover uri={data?.cover} />
            <Details data={data} />
            
            {/* Only shows if there is coupon available */}
            {coupon && <Coupon code={coupon} />}

            <View style={{ padding: 32 }}>
                <Button onPress={handleOpenCamera}>
                    <Button.Title>QR Code</Button.Title>
                </Button>
            </View>

            <Modal
                style={{ flex: 1 }} 
                visible={isVisibleCameraModal} 
                animationType="slide">
                
                <CameraView 
                    style={{ flex:1 }} 
                    facing='back'
                    onBarcodeScanned={({ data }) => console.log(data)}    
                />
                
                <View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
                    <Button 
                        onPress={() => setIsVisibleCameraModal(false)}
                        isLoading={couponIsFetching}>

                        <Button.Title>Close</Button.Title>
                    </Button>
                </View>
            </Modal>
        </View> 
    )
}