import { useEffect, useState } from 'react'
import { View, Text, Alert } from "react-native";

import { api } from '@/services/api'

import { Categories, CategoiesProps } from '@/components/categories'

export default function Home(){
    const [categories, setCategories] = useState<CategoiesProps>([])
    const [category, setCategory] = useState('')

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

    useEffect(() => {
        fetchCategories()
    }, [])

    return(
        <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center' }}
        >
            <Categories 
                data={categories} 
                selected={category}
                onSelect={setCategory}
            />
            <Text>Home</Text>
        </View>
    )
}