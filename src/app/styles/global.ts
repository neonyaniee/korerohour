import { StyleSheet } from "react-native";

export const colors = {
    background: '#E3E3E3',
    text: '#521111',
    textSecondary: '#752323',
    primary: '#d31145'
};

export const globalStyles = StyleSheet.create({
    onboardingContainer:{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
        paddingHorizontal: 20,
        
    },
    authContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    authTitle:{
        color: colors.text,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
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
    button: {
        width: '80%',
        height: '5%',
        backgroundColor: colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: -15,
    },
    buttonText: {
        fontWeight: 'bold',
        color: colors.background,
    },
    date: {
        fontSize: 14,
        color: colors.textSecondary,
        marginTop: 4,
        marginBottom: 30,
        marginLeft: 8,
    },
    inputField: {
        flexDirection:'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.text,
        borderRadius: 10,
        paddingHorizontal: 10,
        width: '90%',
    }
})

export default globalStyles;