import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container:{
        height: 50,
        maxHeight: 50,
        backgroundColor: colors.green.base,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 14,
    },
    title:{
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
    },
});