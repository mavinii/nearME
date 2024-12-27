import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
    container:{
        height: 40,
        backgroundColor: colors.gray[100],
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
        gap: 8,
    },
    name:{
        fontSize: 16,
        color: colors.gray[500],
        fontFamily: fontFamily.regular,
    },
    containerSelected:{
        backgroundColor: colors.green.base,
        borderWidth: 0,
    },
    nameSelected:{
        color: colors.gray[100],
    }
});