import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Icon } from '@ui-kitten/components'


export default Registrationheader = () => {

  return (
    <Layout style={styles.header}>
      <Layout style={styles.titleContainer}> 
      <Text style={styles.headertext}>Registrations</Text>
      </Layout>
      <Layout style={styles.iconContainer}>
      <Icon
        name='funnel-outline'
        style={styles.iconstyle}
      />
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
    tintColor: '#8F9BB3',



  }
})
