import React, { useState, useEffect } from 'react';
import { Card, Layout, List, Text, Icon } from '@ui-kitten/components'
import { Registerstyles } from '../Styles/Registrationstyle'
import { useSelector, useDispatch } from 'react-redux';
import { CUSTOMER_URL, CUSTOMER_DETAILS_URL } from "@env"
import httpClient from "../services/httpClient";
import axios from 'axios';


export default Registrations = ({ route, navigation }) => {

  const { clubs } = route.params;

  const [data, setData] = useState([]);
  const [devices, setDevices] = useState([]);
  const dispatch = useDispatch();
  const initialState = useSelector(state => state.commonStateReducer);

  useEffect(() => {
    console.log('hello');
    console.log('clubs._id', clubs._id);
    const customerDetailsURL = `${CUSTOMER_URL}${CUSTOMER_DETAILS_URL}${clubs._id}`;
    console.log('URL', customerDetailsURL);
    httpClient
      .httpGetWithToken(customerDetailsURL, null, initialState.tenant_token)
      .then(response => {
        console.log("After Axios", response);

        console.log(response);

        console.log("clubID", response.result.customers);
        console.log("Mobile Number", response.result.customers[0].devices[0].mobileNo);
        console.log("Values", JSON.stringify(response));

        setData(response.result.customers);
        setDevices(response.result.customers.devices);

      })
      .catch((error) => console.log("ERROR", error))

  }, []);

  const renderItem = ({ item }) => (

    <Card style={Registerstyles.titlecard} onPress={() => navigation.navigate(screens.registrationsDetails.name,
      {
        firstName: item.firstName, lastName: item.lastName, accountId: item.accountId, email: item.email,
        devices: item.devices, clubsEnrolled: item.clubsEnrolled,

        gender: item.gender
      })}>

      <Text style={Registerstyles.titletext}>{`${item.firstName} ${item.lastName} `}</Text>
      <Text style={Registerstyles.titleemail}>{item.email}</Text>

      <Layout style={Registerstyles.bottomlayer}>
        <Layout style={Registerstyles.bottomphoneno}>
          <Layout style={Registerstyles.alignphonenumbers}>
            <Icon
              name='phone-outline'
              style={Registerstyles.iconstyle}
            />
            <Icon
              name='phone-outline'
              style={Registerstyles.iconstyle}
            />
          </Layout>

          <Layout style={Registerstyles.alignphonenumbers}>
            {
              item.devices.map(n => (

                <Text style={Registerstyles.titlenumber}>{n.mobileNo} </Text>

              ))
            }
          </Layout>

        </Layout>
        <Layout style={Registerstyles.bottomdob}>
          <Text style={Registerstyles.titledate}>{item.dob}</Text>
        </Layout>
      </Layout>
    </Card>
  )
  return (
    <Layout style={Registerstyles.container}>
      <Layout>
        <List
          data={data}
          renderItem={renderItem}
        />
      </Layout>
    </Layout>
  );

};
