import { useEffect, useState } from 'react'
import { View, Alert, Text } from "react-native";
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { router } from "expo-router"

import { api } from '@/services/api'
import { fontFamily, colors } from "@/styles/theme"

import { PlaceProps } from '@/components/place';
import { Places } from '@/components/places'
import { Categories, CategoiesProps } from '@/components/categories'

type MarketProps = PlaceProps & {
    latitude: number,
    longitude: number
}

const currentLocation = {

    // Av. Paulista location
    latitude: -23.561682,
    longitude: -46.656139,

    // Dublin location
    // latitude: 53.33273145639512,
    // longitude: -6.258848377187246,
}

export default function Home(){
    const [categories, setCategories] = useState<CategoiesProps>([])
    const [category, setCategory] = useState('')
    const [markets, setMarkets] = useState<MarketProps[]>([])

    // Get the categories from the API
    async function fetchCategories(){
        try {
            const { data } = await api.get('/categories')
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'An error occurred while loading the categories')
        }
    }

    // Get the markets from the API
    async function fetchMarkets(){
        try {
            if (!category){
                return
            }
            const { data } = await api.get('/markets/category/' + category)
            setMarkets(data)
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'An error occurred while loading the markets')
        }
    }

    // Get the current location 21:00
    async function getCurrentLocation(){
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            
            if (granted) {
                const location = await Location.getCurrentPositionAsync()
                // console.log(location)
            }
            
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'An error occurred while getting the location')            
        }
    }

    useEffect(() => {
        getCurrentLocation()
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchMarkets()
    }, [category])

    return(
        <View style={{ flex: 1, backgroundColor: '#CECECE' }}>
            <Categories 
                data={categories} 
                selected={category}
                onSelect={setCategory}
            />

            <MapView 
                style={{ flex: 1 }} 
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.0822,
                    longitudeDelta: 0.0321,
                }}    
            >
                    <Marker
                        identifier='current'
                        coordinate={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
                        }}
                        image={require("@/assets/location.png")}
                    />

                    {/* Pins on the Map */}
                    {markets.map(( item ) => (
                        <Marker 
                            key={item.id}
                            identifier={item.id}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude,
                            }}
                            // image={require("@/assets/pin.png")}
                        >
                            {/* Card when cliked */}
                            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
                                <View>
                                    <Text style={{ 
                                        fontSize: 14,
                                        fontFamily: fontFamily.bold,
                                        color: colors.gray[600],
                                    }}> { item.name } </Text>
                                    
                                    <Text style={{
                                        fontSize: 12,
                                        fontFamily: fontFamily.regular,
                                        color: colors.gray[600],
                                    }}> { item.address } </Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))}
            </MapView>

            <Places data={markets} />
        </View>
    )
}