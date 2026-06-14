import { StyleSheet } from "react-native";

export const colors = {
    background: '#E3E3E3',
    text: '#521111',
    textSecondary: '#752323',
};

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    title:{
        color: colors.text,
        fontSize: 28,
        fontWeight: 'bold',
    },
    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        fontSize: 14,
        color: colors.textSecondary,
        marginTop: 4,
        marginBottom: 30,
        marginLeft: 8,
    }
})

export default globalStyles;