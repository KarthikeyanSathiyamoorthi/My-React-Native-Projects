import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Registrations from '../Screens/Registrations'
import RegistrationDetails from '../Screens/RegistrationDetails'
import Registrationheader from '../Shared/Registrationheader';
import screens from '../common/screens';

import Login from '../Screens/Login';
import Enterthecode from '../Screens/Enterthecode';
import Newpassword from '../Screens/Newpassword';
import Dashboard  from '../Screens/Dashboard';
import { Dashboardstyles } from '../Styles/Dashboardstyle';
import QRcode from '../Screens/QRcode';


const Registerstack = createStackNavigator()

export default Registrationstack = () => {
    return (
        <NavigationContainer>
            <Registerstack.Navigator>

            <Registerstack.Screen
                   name={screens.dashboard.name}
                   component={Dashboard}
                   options={{
                     title: screens.dashboard.name,
                     headerTitleStyle: Dashboardstyles.headertitle,
                     headerStyle: Dashboardstyles.header
     
                 }}
                />

                <Registerstack.Screen
                    name={screens.registrations.name}
                    component={Registrations}
                    options={{
                        headerTitle: () => <Registrationheader />
                    }}
                />
                <Registerstack.Screen
                    name={screens.registrationsDetails.name}
                    component={RegistrationDetails}
                    options={{
                        title: screens.registrationsDetails.title
                    }}
                />
                 <Registerstack.Screen
                    name={screens.qrcode.name}
                    component={QRcode}
                    options={{
                        headerShown:false
                    }}
                />

            </Registerstack.Navigator>
        </NavigationContainer>
    )
}

