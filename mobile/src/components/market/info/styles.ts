import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    text: {
        flex: 1,
        color: colors.gray[500],
        fontSize: 15,
        fontFamily: fontFamily.regular,
        lineHeight: 24.4,
    },
})