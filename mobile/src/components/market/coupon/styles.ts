import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.bold,
        color: colors.gray[500],
        marginBottom: 12,
    },
    content: {
        flexDirection: "row",
        backgroundColor: colors.green.soft,
        paddingHorizontal: 8,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        gap: 10,
    },
    code: {
        color: colors.gray[600],
        fontSize: 16,
        fontFamily: fontFamily.bold,
        textTransform: "uppercase",
    },
})