import { StyleSheet } from 'react-native'

export const QRstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)'

    },
    topcontainer: {

        backgroundColor: '#CC6206',
        alignItems: 'center'


    },
    layout: {

        marginVertical: 50,
        marginHorizontal: 10,
        borderRadius: 12,
        backgroundColor: '#FFFFFF'
    },
    text: {

        color: '#2B3859',
        fontSize: 15,
        textAlign: 'center',
        margin: 20,

    },
    button: {
        margin: 25,

    },
    blurbutton: {
        marginHorizontal: 24,
        marginVertical: 100
    },
    blur: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
    blurlayout: {
        backgroundColor: '#EE7E09',
        padding: 10
    },
    blurimage: {

        width: 275,
        height: 285,
        margin: 40,

    },
    QRimage: {

        alignItems: 'center',
        height: 286,
        margin: 30
    }
});