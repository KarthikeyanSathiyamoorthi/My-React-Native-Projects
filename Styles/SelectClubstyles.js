import { StyleSheet } from 'react-native';

export const SelectClubstyles = StyleSheet.create({
    container: {

        flex: 1,
        padding: 15,
        backgroundColor: '#F7F9FC'
    },
    header:{
        backgroundColor:'#EE7E09'
    },
    headertitle:{
        color:'#FFFFFF'
    },
    card:{
        padding:15,
        marginVertical:10
    },
    arrowIconStyle:{
        tintColor:'#222B45',
        height: 20,
        width: 20,
    },
    detailsContainer:{
        flexDirection:'row'
    },
    textContainer:{
        flex:1,
        flexDirection:'column',
        
    },
    iconContainer:{
        alignItems:'center',
        paddingTop:7,
        
    },
    clubName: {
        color: '#222B45',
        fontSize: 18,
        fontWeight: 'bold'
    },
    clubCity: {
        color: '#8F9BB3',
        fontSize: 13,
        fontWeight: '600'
    },
    iconStyle: {
        height: 20,
        width: 20,
        tintColor: '#EE7E09',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    
})