import React from 'react';
import { Icon } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as mapping } from "./common/uiKittenMappings.json";

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './assets/light-theme.json';

import screens from './common/screens';
import Newpassword from './Screens/Newpassword';
import QRcode from './Screens/QRcode';
import Login from './Screens/Login';
import Registrations from './Screens/Registrations';
import RegistrationDetails from './Screens/RegistrationDetails';
import Enterthecode from './Screens/Enterthecode';
import  Dashboard from './Screens/Dashboard';
import SelectClub from './Screens/SelectClub';
import  RegisteredClubs  from './Screens/RegisteredClubs';
import Registrationheader from './Shared/Registrationheader';
import { Dashboardstyles } from './Styles/Dashboardstyle';
import { SelectClubstyles } from './Styles/SelectClubstyles';
import Newclub from './Screens/Newclub';
import RegisteredClubsHeader from './Shared/RegisteredClubsHeader';
import { RegisteredClubsHeaderstyles } from './Styles/RegisteredClubsHeaderstyles';


const Stack = createStackNavigator();

export default App = () => {
  return (
   
     <>
       <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider  {...eva}
        customMapping={mapping}
        theme={{ ...eva.light, ...theme }}>
          <NavigationContainer>
          <Stack.Navigator initialRouteName={screens.login.name}>
             <Stack.Screen
              name={screens.login.name}
              component={Login}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name={screens.enterthecode.name}
              component={Enterthecode}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name={screens.newPassword.name}
              component={Newpassword}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name={screens.dashboard.name}
              component={Dashboard}
              options={{
                title: screens.dashboard.name,
                headerTitleStyle: Dashboardstyles.headertitle,
                headerStyle: Dashboardstyles.header

            }}
            />
            <Stack.Screen
              name={screens.selectclub.name}
              component={SelectClub}
              options={{
                title: screens.selectclub.name,
            }}
            />
            <Stack.Screen
              name={screens.registeredclubs.name}
              component={RegisteredClubs}
              static options={({navigation}) => {
                 return{
                headerTitle: () => <RegisteredClubsHeader />,
                headerRight: () => <Icon
                   name='plus-circle-outline'
                    style={RegisteredClubsHeaderstyles.iconstyle}
                    onPress= { () => navigation.navigate(screens.newclub.name)}
                   />
                }}
              } 
            //     // title: screens.registeredclubs.title,
            //     // headerTitleStyle: SelectClubstyles.headertitle,
            //     // headerStyle: SelectClubstyles.header
            //     headerTitle: ({navigation}) => <RegisteredClubsHeader navigation={navigation}/>
            // }}
            /> 
            
            <Stack.Screen
              name={screens.newclub.name}
              component={Newclub}
              options={{
                title: screens.newclub.name
            }}
            />
            <Stack.Screen
              name={screens.registrations.name}
              component={Registrations}
              options={{
                headerTitle: () => <Registrationheader />
            }}
            />
            <Stack.Screen
              name={screens.registrationsDetails.name}
              component={RegistrationDetails}
              options={{
                  title: screens.registrationsDetails.title
                }}
              />
              <Stack.Screen
              name={screens.qrcode.name}
              component={QRcode}
              options={{
                  headerShown:false
                }}
              /> 
              
          </Stack.Navigator>
              </NavigationContainer> 
        
      </ApplicationProvider> 
      
    </>
  );
};
