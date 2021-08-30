import { StyleSheet } from 'react-native';

export const Newpasswordstyles = StyleSheet.create({
    maincontainer: {
        flex: 1
    },
    topcontainer: {
        backgroundColor: '#CC6206',
        paddingTop: 150,
        padding: 20
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
        padding: 20
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

    button: {
        margin: 25
    },


})