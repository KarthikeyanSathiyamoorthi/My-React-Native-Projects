import { StyleSheet } from 'react-native';

export const Dashboardstyles = StyleSheet.create({
    container: {

        flex: 1,
        paddingVertical:10 
    
    },
    dashboardItemsRow:{
      
       flexDirection:'row',
       paddingHorizontal:5,
       justifyContent:'space-between',
       
    },
    dashboardItem: {

       flex:1,
       marginVertical:7,
       marginHorizontal:7,
       borderRadius: 4 ,   
    },
    card:{
        
        padding:15
    },
    iconContainer:{
        height:50,
        width:50,
        opacity: 0.4,
        backgroundColor: '#EE7E09',
        alignItems:'center',
        paddingTop:7,
        borderRadius:4,
        marginBottom:35,
        
    },
    header:{
        backgroundColor:'#EE7E09'
    },
    headertitle:{
        color:'#FFFFFF'
    },

    docIcon: {

        padding:10,
        height: 35,
        width: 35,
        tintColor: '#CC6206',
    
    },
    title: {
               
        color: '#222B45',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 5,
      
    },
    titletext: {
      
        color: '#8F9BB3',
        fontSize: 13,
        
       
    },
    
})