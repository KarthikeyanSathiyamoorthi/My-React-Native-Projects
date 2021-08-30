import * as React from 'react'
import {View,Text,Image,ImageBackground,StyleSheet} from 'react-native'

import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import Hello from '../Screens/Hello'
import Body from '../Screens/Body'
import End from '../Screens/End'
import Header  from '../Shared/Header'


const Authstack = createStackNavigator ();
export default function Homestack () {
  return(
     <Authstack.Navigator>
        <Authstack.Screen 
         name = 'Home'
         component ={Hello} 
         options={{
          headerTitle :() => <Header /> }}
      />
     
       <Authstack.Screen
       name = 'Body'
       component={Body}
       options={{title:'Body-Page', headerStyle:{backgroundColor: '#eee'} , headerTitleAlign:'center'}}
         
       
       />
       <Authstack.Screen
       name = 'Last'
       component={End}
       options={{title:'Last-Page', headerStyle:{backgroundColor: '#eee'} , headerTitleAlign:'center'}}
       />    
      </Authstack.Navigator>
 )}
 