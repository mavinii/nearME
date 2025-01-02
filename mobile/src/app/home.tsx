import { useEffect, useState } from 'react'
import { View, Text, Alert } from "react-native";
import MapView from 'react-native-maps';

import { api } from '@/services/api'

import { PlaceProps } from '@/components/place';
import { Places } from '@/components/places'
import { Categories, CategoiesProps } from '@/components/categories'

type MarketProps = PlaceProps & {}

export default function Home(){
    const [categories, setCategories] = useState<CategoiesProps>([])
    const [category, setCategory] = useState('')
    const [markets, setMarkets] = useState<MarketProps[]>([])

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

    useEffect(() => {
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
            
            <MapView style={{ flex: 1 }} />

            <Places data={markets} />
        </View>
    )
}