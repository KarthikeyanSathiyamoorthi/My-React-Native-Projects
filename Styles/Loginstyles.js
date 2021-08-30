import { StyleSheet } from 'react-native'

export const Loginstyles = StyleSheet.create({
    maincontainer: {
        flex: 1
    },
    container2: {
        alignContent: "space-around"
    },
    topcontainer: {
        backgroundColor: '#CC6206',
        paddingTop: 150,
        padding: 20
    },
    passwordcontainer: {
        flex: 1,
        backgroundColor: '#CC6206',
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    signin: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',

    },
    text: {
        color: '#FFFFFF',
        fontSize: 15,


    },
    emailInput: {
        //padding: 20
        paddingHorizontal:20,
        paddingTop:20
    },

    label: {
        color: '#8992A3',
        fontSize: 12,
        fontWeight: 'bold',
    },
    passewordInput: {
        //padding: 20,
        paddingHorizontal:20,
        paddingTop:20
    },
    forgetpassword: {
        textAlign: "center",
        color: '#CC6206',

    },
    button: {
        margin: 30
    },
    errornotification: {
        flexDirection: 'row',
        paddingLeft: 20,


    },
    errormessage: {
        flex: 1,
        color: '#FF4E32',
       fontSize: 12,


    },
    iconstyle: {
        flex: 2,
        height: 15,
        width: 15,
        tintColor: '#FF4E32',


    },

})