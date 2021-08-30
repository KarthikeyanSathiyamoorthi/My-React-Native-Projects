import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Homestack from './Homestack';
import Aboutstack from './Aboutstack';

const Drawer = createDrawerNavigator ();
export default function Drawerstack(){
    return(

        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
               
                <Drawer.Screen
                name = 'Home'
                component={Homestack} />
                <Drawer.Screen 
                name ='About'
                component={Aboutstack}/>
           
            </Drawer.Navigator>
        </NavigationContainer>
    )
}