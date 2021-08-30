import React, { useEffect, useState } from 'react';
import { Layout, Text, Card, List, Input, Icon } from '@ui-kitten/components';
import { ScrollView } from 'react-native';
import screens from '../common/screens';
import httpClient from "../services/httpClient";
import { RegisteredClubsStyles } from '../Styles/RegisteredClubsStyles';
import { updateTenant, updateOtpToken } from "../redux/actions/commonStateActions";
import { useSelector, useDispatch } from "react-redux";
import { TENANT_URL, TENANTCLUB_LISTS_URL } from "@env";

const SearchIcon = () => (
    <Icon style={RegisteredClubsStyles.iconStyle} name='search' />
);

export default RegisteredClubs = ({ route, navigation }) => {

    const [clubs, setClubs] = useState(null);
    const dispatch = useDispatch();
    console.log(dispatch);
    const initialState = useSelector((state) => state.commonStateReducer);

    console.log("InitialState", initialState);
    console.log("dashboardInitialState", initialState.tenant_token);
    console.log("tenantId", initialState.tenant._id);
    console.log("clubs", clubs);

    const tenantClubListsURL = `${TENANT_URL}${TENANTCLUB_LISTS_URL}${initialState.tenant._id}`

    useEffect(() => {
        console.log('tenantClubListsURL', tenantClubListsURL);
        httpClient.httpGetWithToken(tenantClubListsURL, null, initialState.tenant_token)
            .then((response) => {
                console.log("tenant-club-lists", response);
                console.log("CLUBS", response.result.clubs);
                setClubs(response.result.clubs);

            })
            .catch((error) => console.log("ERROR", error))

    }, []);

    const renderItem = ({ item }) => (
        <ScrollView>
        <Card style={RegisteredClubsStyles.card} onPress={() => navigation.navigate(screens.registrations.name, { clubs: item })}>
            <Layout style={RegisteredClubsStyles.detailsContainer}>
              <Layout style={RegisteredClubsStyles.textContainer}>
            <Text style={RegisteredClubsStyles.clubName}>{item.clubName}</Text>
            <Text style={RegisteredClubsStyles.clubCity}>{item.address.city}</Text>
            </Layout>
            <Layout style={RegisteredClubsStyles.iconContainer}>
            <Icon style={RegisteredClubsStyles.arrowIconStyle} name='arrow-ios-forward-outline' />
            </Layout>
           
            </Layout>
            </Card>
                
            
                </ScrollView>
    
    )

    return (
        <Layout style={RegisteredClubsStyles.container}>
            <Input
                placeholder='Search Clubs '
                accessoryRight={SearchIcon}
            />
            <Layout>
                <List
                    data={clubs}
                    renderItem={renderItem}
                />
            </Layout>
        </Layout>
    )
}