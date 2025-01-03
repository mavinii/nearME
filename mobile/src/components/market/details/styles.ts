import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        padding: 32,
        paddingBottom: 0,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: colors.gray[100],
    },
    name: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[600],
    },
    description: {
        fontSize: 18,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 8,
        marginBottom: 24,
        lineHeight: 24.4,
    },
    group: {
        width: "100%",
        borderBottomWidth: 1,
        borderBlockColor: colors.gray[200],
        paddingBottom: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.bold,
        color: colors.gray[500],
        marginBottom: 10,
    },
    rule: {
        fontSize: 15,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
        lineHeight: 24.4,
    },
})