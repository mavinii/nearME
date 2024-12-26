import { Text, View } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native';

import { s } from "./styles";
import { Step } from "@/components/step";

export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>How it works:</Text>
            <Step
                icon={IconMapPin}
                title="Find a Place" 
                description="Find the best place near you."
            />
            <Step
                icon={IconQrcode}
                title="Activate your QR Code" 
                description="Scan the QR Code in the restaurant."
            />
            <Step
                icon={IconTicket}
                title="Discount Nearby" 
                description="Get the best discount in the place."
            />
        </View>
    )
}