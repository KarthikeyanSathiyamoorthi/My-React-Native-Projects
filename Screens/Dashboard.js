import React, { useState } from 'react';
import { Layout, Text, Card, Icon } from '@ui-kitten/components'
import { Dashboardstyles } from '../Styles/Dashboardstyle';
import { ScrollView } from 'react-native';
import screens from '../common/screens';
import httpClient from "../services/httpClient";

import { updateTenant, updateOtpToken } from "../redux/actions/commonStateActions";
import { useSelector, useDispatch } from "react-redux";

import { TENANT_URL, TENANTCLUB_LISTS_URL } from "@env";

export default Dashboard = ({ route, navigation }) => {

  const { tenantId, otpToken } = route.params;

  const [visible, setVisible] = useState(false);

  

  

  
  const renderItem = ({ item }) => (
    <Card style={Dashboardstyles.clublists} onPress={() =>
      (screens.registrations.name, { clubs: item }, setVisible(false))
    }>
      <Text>{item.clubName}</Text>
    </Card>
  )

  return (
    <ScrollView>
      <Layout style={Dashboardstyles.container}>
        <Layout style={Dashboardstyles.dashboardItemsRow}>
          <Layout style={Dashboardstyles.dashboardItem}>
            <Card style={Dashboardstyles.card} onPress={() => (navigation.navigate(screens.selectclub.name), { tenantId: tenantId })}>
            <Layout style={Dashboardstyles.iconContainer}>
              <Icon
                name='file-text-outline'
                style={Dashboardstyles.docIcon}
              />
              </Layout>
              <Text style={Dashboardstyles.title}>Users</Text>
              <Text style={Dashboardstyles.titletext}>All Registered Users</Text>
            </Card>
          </Layout>
          <Layout style={Dashboardstyles.dashboardItem}>
            <Card style={Dashboardstyles.card} onPress={() => (navigation.navigate(screens.registeredclubs.name), { tenantId: tenantId })}>
            <Layout style={Dashboardstyles.iconContainer}>
              <Icon
                name='file-text-outline'
                style={Dashboardstyles.docIcon}
              />
              </Layout>
              <Text style={Dashboardstyles.title}>Clubs</Text>
              <Text style={Dashboardstyles.titletext}>Registered Clubs</Text>
            </Card>
          </Layout>
        </Layout>
        <Layout style={Dashboardstyles.dashboardItemsRow}>
          <Layout style={Dashboardstyles.dashboardItem}>
            <Card style={Dashboardstyles.card} onPress={() => modalscreen()}>
              <Layout style={Dashboardstyles.iconContainer}>
              
              <Icon
                name='book-outline'
                style={Dashboardstyles.docIcon}
              />
              
              </Layout>
              <Text style={Dashboardstyles.title}>Payments</Text>
              <Text style={Dashboardstyles.titletext}>Payments received</Text>
            </Card>
          </Layout>
          <Layout style={Dashboardstyles.dashboardItem}>
            <Card style={Dashboardstyles.card} onPress={() => modalscreen()}>
            <Layout style={Dashboardstyles.iconContainer}>
              <Icon
                name='book-outline'
                style={Dashboardstyles.docIcon}
              />
              </Layout>
              <Text style={Dashboardstyles.title}>Insights</Text>
              <Text style={Dashboardstyles.titletext}>Insights on business</Text>
            </Card>
          </Layout>
        </Layout>
        <Layout style={Dashboardstyles.dashboardItemsRow}>
          <Layout style={Dashboardstyles.dashboardItem}>
            <Card style={Dashboardstyles.card} onPress={() => modalscreen()}>
            <Layout style={Dashboardstyles.iconContainer}>
              <Icon
                name='file-text-outline'
                style={Dashboardstyles.docIcon}
              />
              </Layout>
              <Text style={Dashboardstyles.title}>Reports</Text>
              <Text style={Dashboardstyles.titletext}>Generate Reports</Text>
            </Card>
          </Layout>
          <Layout style={Dashboardstyles.dashboardItem}>
          <Card style={Dashboardstyles.card} onPress={() => modalscreen()}>
            <Layout style={Dashboardstyles.iconContainer}>
              <Icon
                name='file-text-outline'
                style={Dashboardstyles.docIcon}
              />
              </Layout>
              <Text style={Dashboardstyles.title}>Subscription</Text>
              <Text style={Dashboardstyles.titletext}>Manage Subscription</Text>
            </Card>
          </Layout>
        </Layout>
      </Layout>
    </ScrollView>
  )
};

