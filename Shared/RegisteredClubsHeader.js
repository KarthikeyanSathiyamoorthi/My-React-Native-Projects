import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, Icon } from '@ui-kitten/components';
import screens from '../common/screens';
import {RegisteredClubsHeaderstyles} from '../Styles/RegisteredClubsHeaderstyles';

// let passNavigation ;
export default RegisteredClubsHeader = ( ) => {
//     console.log('navigation',navigation);
//    passNavigation=navigation;
//    console.log('passNavigation',passNavigation);
  return (
    <Layout style={RegisteredClubsHeaderstyles.header}>
      <Layout style={RegisteredClubsHeaderstyles.titleContainer}> 
      <Text style={RegisteredClubsHeaderstyles.headertext}>Registered Clubs</Text>
      </Layout>
      <Layout  style={RegisteredClubsHeaderstyles.iconContainer}>
        
       {/* <Icon
       name='plus-circle-outline'
        style={RegisteredClubsHeaderstyles.iconstyle}
        onPress= {() => navigation.setParams({param: 'createClub'})}
      />  */}
      
      </Layout>
    </Layout>


  )
}
const styles = StyleSheet.create({

  
  header: {
    flex:1,
    flexDirection: 'row',
   
    
  },
  titleContainer:{
    flex:1,
   
  },
  iconContainer:{
    padding:10,
    
  },
  headertext: {
    
    fontWeight: 'bold',
    fontSize: 26,
   
  },
  iconstyle: {
    width: 20,
    height: 20,
    tintColor: '#EE7E09',



  }
})
