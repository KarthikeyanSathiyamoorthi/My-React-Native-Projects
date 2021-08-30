import * as React from 'react'

import About from '../Screens/About'

import { createStackNavigator } from '@react-navigation/stack'

const Authstack = createStackNavigator ();
export default function Aboutstack () {
  return(
    <Authstack.Navigator>

      <Authstack.Screen
       name='About'
       component ={About}
       options = {{
         title:'About-Screen', 
         headerTransparent: true}}
       
       />
    </Authstack.Navigator>
  )
  
}