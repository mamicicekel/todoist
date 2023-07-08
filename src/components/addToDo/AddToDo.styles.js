import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 30,
    },
    textinput: {
        borderColor: '#42B4D0',
        borderRadius: 10,
        borderWidth: 1,
        height: 35,
        padding: 10,
    },
    buttonDisabled: {
        alignItems: 'center',
        backgroundColor: '#959496',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
    },
    buttonEnabled: {
        alignItems: 'center',
        backgroundColor: '#04CCFF',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
    }
})