import { View, Text } from "react-native"
import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native"

import { Info } from "@/components/market/info"

import { s } from "./styles"

export type PropDetails = {
    name: string
    description: string
    address: string
    phone: string
    coupons: number
    rules: {
        id: string
        description: string
    }[]
}

type Props = {
    data: PropDetails
}

export function Details({ data }: Props){
    return(
        <View style={s.container}>
            <Text style={s.name}>{ data.name }</Text>
            <Text style={s.description}>{ data.description }</Text>

            <View style={s.group}>
                <Text style={s.title}>Informations:</Text>
                
                <Info icon={IconTicket} description={`${data.coupons} coupons available`} />
                <Info icon={IconMapPin} description={data.address} />
                <Info icon={IconPhone} description={data.phone} />
            </View>

            <View style={s.group}>
                <Text style={s.title}>Rules:</Text>
                { data.rules.map(item => (
                    <Text 
                        key={item.id} 
                        style={s.rule}>
                            {`\u2022 ${item.description}`}
                    </Text>
                ))}
            </View>
        </View>
    )
}