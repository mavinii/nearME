import { Image, Text, View } from "react-native";

import { s } from "./styles";

/**
 * The `Welcome` component is a part of the NearMe mobile application.
 * This React Native component displays a welcome screen with the app's logo,
 * a title, and a subtitle. The subtitle provides a brief description of the app,
 * which helps users find the best discounts and promotions in their favorite places nearby.
 *
 * @component
 * @example
 * return (
 *   <Welcome />
 * )
 */
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
                

                {/* Find discounts and promotions in your {"\n"}
                favorite places near you. */}
            </Text>
        </View>
    )
}