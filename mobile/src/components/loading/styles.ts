import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[100],
    },
    text: {
        fontFamily: "Rubik_600SemiBold",
        fontSize: 16,
        color: colors.gray[500],
    },
});