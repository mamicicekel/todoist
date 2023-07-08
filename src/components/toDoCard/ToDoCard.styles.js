import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerEnabled: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        borderRadius: 30,
        height: 60,
        marginVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    containerDisabled: {
        backgroundColor: '#9dbec9',
        marginHorizontal: 15,
        borderRadius: 30,
        height: 60,
        marginVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: '200',
        fontSize: 17,
        marginRight: 20,
    },
    doneText: {
        fontWeight: '200',
        fontSize: 17,
        textDecorationLine: "line-through",
    },
})

