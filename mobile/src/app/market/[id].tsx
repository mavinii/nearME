import { useEffect, useState, useRef } from 'react'
import { View, Alert, Modal, StatusBar, ScrollView } from "react-native"
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
    const [isLoading, setIsLoading] = useState(true)
    const [couponIsFetching, setCouponIsFetching] = useState(false)
    const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)

    const [_, requestPermission] = useCameraPermissions()
    const params = useLocalSearchParams<{ id: string }>()

    const qrLock = useRef(false)
    console.log(params.id)

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

            qrLock.current = false
            setIsVisibleCameraModal(true)
        } catch (error) {
            console.log(`Camera, Access Denied!: ${error}`)
            Alert.alert("Camera", "Access Denied!")
        }
    }

    // QR Code Scanner
    async function handleQRCodeScanner(id: string){
        try {
            setCouponIsFetching(true)

            const { data } = await api.patch(`/coupons/${id}`)

            Alert.alert("Success", `Here is your code: ${data.coupon}, enjoy!`)
            setCoupon(data.coupon)
        } catch (error) {
            console.log(`QR Code is invalid! ${error}`)
            Alert.alert("Error", "QR Code is invalid!")
        } finally {
            setCouponIsFetching(false)
        }
    }

    // Handle use coupon
    function handleUseCoupon(id: string){
        setIsVisibleCameraModal(false)

        Alert.alert(
            "Attention!", 
            "You are about to redeem a coupon! Do you really wish to continue?", 
            [
                { style: "cancel", text: "No" },
                { text: "Yes", onPress: () => handleQRCodeScanner(id) },
            ]
        )
    }

    useEffect(() => {
        fetchMarket()
    }, [params.id, coupon])

    if(isLoading){
        return <Loading />
    }

    if(!data){
        return <Redirect href="/home" />
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" hidden={isVisibleCameraModal} />

            <ScrollView showsHorizontalScrollIndicator={false}>
                <Cover uri={data?.cover} />
                <Details data={data} />
                
                {/* Only shows if there is coupon available */}
                {coupon && <Coupon code={coupon} />}
            </ScrollView>

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
                    onBarcodeScanned={({ data }) => {
                        if(data && !qrLock.current){
                            qrLock.current = true
                            setTimeout(() => handleUseCoupon(data), 500)
                        }
                    }}    
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