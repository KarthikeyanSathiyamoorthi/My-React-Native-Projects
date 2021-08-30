import React from 'react'
import{Text,View,StyleSheet,Image,ImageBackground} from 'react-native'

export default function Header({ navigation, title}) {
    
    return(
        
        <ImageBackground source ={require('../assets/game_bg.png')}style ={styles.header} >
          <View style = {styles.headertitle}>
          <Image  source = {require('../assets/heart_logo.png')} style = {styles.headerimage}/>
          <Text style ={styles.headertext}>Home-Page</Text>
          
          </View>
        </ImageBackground>

   )        
}

    
  

const styles = StyleSheet.create ({
    header:{
      width:'100%',
      height:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    headertext:{
      fontWeight:'bold',
      fontSize:20,
      color:'#333',
      letterSpacing:1
    },
    headertitle:{
      flexDirection:'row'
    },
    headerimage:{
      width:26,
      height:26,
      marginHorizontal:10
    }
  })
 
 