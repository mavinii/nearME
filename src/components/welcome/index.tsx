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
                This is an react-native app that helps you {"\n"}
                to find the best discounts and promotions {"\n"}
            </Text>
        </View>
    )
}