import { Image, Text, View } from "react-native";

import { s } from "./styles";

export function Welcome() {
    return (
        <View>
            <Image
                source={require('@/assets/logo.png')}
                style={s.logo}
            />

            <Text style={s.title}>Welcome to NearMe!</Text>
            
            <Text style={s.subtitle}>
                Find discounts and promotions in your {"\n"}
                favorite places near you.
            </Text>
        </View>
    )
}