import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        height: 125,
        width: '100%',
        padding: 8,
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 8,
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
    },
    image: {
        width: 116,
        height: '100%',
        backgroundColor: colors.gray[200],
        borderRadius: 5,
    },
    content: {
        flex: 1,
        gap: 4,
    },
    name: {
        fontSize: 15,
        fontFamily: fontFamily.bold,
        color: colors.gray[600],
    },
    description: {
        fontSize: 13,
        fontFamily: fontFamily.regular,
        color: colors.gray[400],
    },
    footer: {
        flexDirection: 'row',
        gap: 7,
        marginTop: 7,
    },
    tickets: {
        fontSize: 13,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[500],
    },
})