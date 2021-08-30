import { StyleSheet } from 'react-native';

export const Registerstyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F7F9FC'

    },
    titletext: {
        color: '#222B45',
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleemail: {
        fontSize: 13,
        color: '#8F9BB3',
        fontWeight: '600',
    },
    titlenumber: {
        color: '#CC6206',
        
    },
    titledate: {
        color: '#8F9BB3',
        fontSize: 13,
        fontWeight: '600',      
         
    },
    titlecard: {
        // //marginBottom: 16,
        // height: 130,
        // //width: 340,
         borderRadius: 5,
        // //backgroundColor: '#FFFFFF'
        padding:16
    },
    bottomlayer:{
       flexDirection:'row'
    },
    bottomphoneno: {
        flex: 2,
        flexDirection:'row',
        paddingTop:20
       

    },
    alignphonenumbers:{
        flexDirection:'column'
    },
    bottomdob: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingTop:20
    },
    iconstyle: {
        height: 20,
        width: 20,
        tintColor: '#EE7E09',
       
        
    }

})  
