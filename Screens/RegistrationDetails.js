import { Text, Layout, Card, Button, Tab, TabView, Divider, List, Icon } from '@ui-kitten/components';
//import { ScrollableTopView } from 'react-native-scrollable-tab-view';
import React, { useCallback, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { Registrationdetailsstyle } from '../Styles/Registrationdetailsstyle'
import { Detailsstyle } from '../Styles/Detailsstyle'
import screens from "../common/screens";

export default RegistrationDetails = ({ navigation, route: { params } }) => {
  const { firstName, lastName, accountId, email, devices, clubsEnrolled } = params;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setdata] = useState([params])

  function generateQrCode() {

    const deviceId = devices.map(n => (n.deviceId));
    const deviceName = devices.map(n => (n.deviceName));
    const clubId = clubsEnrolled.map(n => (n.clubId));
    console.log("customerDetails", deviceId, accountId, clubId);
    console.log("Devices", deviceName);
    navigation.navigate(screens.qrcode.name,
      { deviceId: deviceId, accountId: accountId, clubId: clubId });
  }


  const renderItem = ({ item }) => (
    
      <Layout style={Detailsstyle.tabviewlists}>

        <Layout style={Detailsstyle.firstnamelayout}>
          <Text style={Detailsstyle.titlefirst}>First Name</Text>
          <Text style={Detailsstyle.firstName}>{item.firstName}</Text>
        </Layout>
        <Divider />
        <Layout style={Detailsstyle.lastnamelayout}>
          <Text style={Detailsstyle.titlelast}>Last Name</Text>
          <Text style={Detailsstyle.lastName}>{item.lastName}</Text>
        </Layout>
        <Divider />
        <Layout style={Detailsstyle.genderlayout}>
          <Text style={Detailsstyle.titlegender}>Gender</Text>
          <Text style={Detailsstyle.sex}>{item.gender}</Text>
        </Layout>
        <Divider />
        <Layout style={Detailsstyle.addresslayout}>
          <Text style={Detailsstyle.titleaddress}>Address</Text>
          <Text style={Detailsstyle.address}>55 Ann O’Riley Road, Toronto ON  M2J 0E1</Text>
        </Layout>
        <Divider />
        <Layout style={Detailsstyle.devicelayout}>
          <Text style={Detailsstyle.titleactive}>Active Device</Text>

          {
            item.devices.map(n => (

              <Text style={Detailsstyle.titlenumber}>{`${n.deviceName} ${n.deviceModel} ${n.deviceId}`}</Text>

            ))
          }

        </Layout>
        <Layout style={Detailsstyle.healthchecklayout}>
          <Text style={Detailsstyle.healthchecks}>Health Checks</Text>
        </Layout>
        <Layout style={Detailsstyle.addressprooflayout}>
          <Layout style={{ flex: 1 }}>
            <Text style={Detailsstyle.addressproof}>Address Proof</Text>
          </Layout>
          <Icon
            name='close-circle-outline'
            style={Detailsstyle.circleoutlinestyle}
          />
        </Layout >
        <Layout style={Detailsstyle.addressprooflayout}>
          <Layout style={{ flex: 1 }}>
            <Text style={Detailsstyle.deviceverification}>Device Verification</Text>
          </Layout>
          <Icon
            name='checkmark-circle-2-outline'
            style={Detailsstyle.checkmarkstyle}
          />
        </Layout>
        <Layout style={Detailsstyle.addressprooflayout}>
          <Layout style={{ flex: 1 }}>
            <Text style={Detailsstyle.subscription}>Subscription</Text>
          </Layout>
          <Icon
            name='checkmark-circle-2-outline'
            style={Detailsstyle.checkmarkstyle}
          />
        </Layout>

      </Layout>
  


  );
  return (
       <Layout style={Registrationdetailsstyle.container} >
        <Layout style={Registrationdetailsstyle.topLayout}>
          <Text style={Registrationdetailsstyle.namestyle}>{`${firstName} ${lastName}`}</Text>
          <Text style={Registrationdetailsstyle.emailstyle}>{email}</Text>

        </Layout>
        <Divider />
        <Layout style={Registrationdetailsstyle.cardMiddle}>
          <Layout style={Registrationdetailsstyle.mobileLayout}>
            <Text style={Registrationdetailsstyle.mobilestyle}>Mobile</Text>
            {devices.map(n => (
              <Text style={Registrationdetailsstyle.phonenostyle}>{n.countryCode} {n.mobileNo}</Text>
            ))
            }
          </Layout>
          <Layout style={Registrationdetailsstyle.registeredLayout} >
            <Text style={Registrationdetailsstyle.registeredonstyle}>Registered on</Text>
            <Text style={Registrationdetailsstyle.datestyle}>12 May,12:50 AM</Text>
          </Layout>

        </Layout>
        <Divider />
        <Layout style={Registrationdetailsstyle.cardBottom}>

          <Layout style={Registrationdetailsstyle.subscriptionLayout}>
            <Text style={Registrationdetailsstyle.subscriptionstyle}>Subscription</Text>
            <Text style={Registrationdetailsstyle.INRstyle}>INR 250 Monthly</Text>
          </Layout>

          <Layout style={Registrationdetailsstyle.typeLayout}>
            <Text style={Registrationdetailsstyle.typestyle}>Type</Text>
            <Text style={Registrationdetailsstyle.familystyle}>Family</Text>
          </Layout>

        </Layout>

        <Button style={Registrationdetailsstyle.button} appearance='outline' onPress={() => generateQrCode()} status='success'>
          <Text style={Registrationdetailsstyle.buttonText}>GENERATE QR CODE VALIDATION</Text>
        </Button>
      

      <Layout style ={Detailsstyle.tabcontainer} >      
       <TabView
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <Tab title='DETAILS'>
          <List
            data={data}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </Tab>
        <Tab title='PAYMENT'>
          <Layout >
            <Text>Payment</Text>
          </Layout>
        </Tab>

      </TabView>  
    </Layout>
    </Layout> 

    

  )
}
