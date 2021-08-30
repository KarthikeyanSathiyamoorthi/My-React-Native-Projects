import React, { useEffect, useState } from 'react';
import { Layout, Text, Card, List, Input, Icon } from '@ui-kitten/components';
import { ScrollView } from 'react-native';
import screens from '../common/screens';
import httpClient from "../services/httpClient";
import { SelectClubstyles } from '../Styles/SelectClubstyles';
import { updateTenant, updateOtpToken } from "../redux/actions/commonStateActions";
import { useSelector, useDispatch } from "react-redux";
import { TENANT_URL, TENANTCLUB_LISTS_URL } from "@env";

const SearchIcon = () => (
    <Icon style={SelectClubstyles.iconStyle} name='search' />
);

export default SelectClub = ({ route, navigation }) => {

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
            <Card style={SelectClubstyles.card} onPress={() => navigation.navigate(screens.registrations.name, { clubs: item })}>
                <Layout style={SelectClubstyles.detailsContainer}>
                  <Layout style={SelectClubstyles.textContainer}>
                <Text style={SelectClubstyles.clubName}>{item.clubName}</Text>
                <Text style={SelectClubstyles.clubCity}>{item.address.city}</Text>
                </Layout>
                <Layout style={SelectClubstyles.iconContainer}>
                <Icon style={SelectClubstyles.arrowIconStyle} name='arrow-ios-forward-outline' />
                </Layout>
               
                </Layout>
                 {/* <Layout style ={SelectClubstyles.listsContainer}>
                    <Layout style ={SelectClubstyles.textContainer}>
                     <Layout style={{flex:1}}>   
                    <Text style={SelectClubstyles.clubName}>{item.clubName}</Text>
                    <Text style={SelectClubstyles.clubCity}>{item.address.city}</Text> 
                    </Layout>
                    </Layout>
                    <Layout style={SelectClubstyles.iconContainer}>
                    <Icon style={SelectClubstyles.arrowIconStyle} name='arrow-ios-forward-outline' />  
                    </Layout>
                    </Layout> */}
                {/* <Layout style={{flexDirection:'row',backgroundColor:'coral'}}>
                    <Layout style={SelectClubstyles.listsContainer} >
                        <Text style={SelectClubstyles.clubName}>{item.clubName}</Text>
                        <Text style={SelectClubstyles.clubCity}>{item.address.city}</Text>
                    </Layout>
                    <Layout style ={{flex:2, backgroundColor:'blue'}}>
                    <Icon style={SelectClubstyles.arrowIconStyle} name='arrow-ios-forward-outline' />
                    </Layout>
                    </Layout> */}
                </Card>
                
            
        </ScrollView>
    )

    return (
        <Layout style={SelectClubstyles.container}>
            <Input
                placeholder='Search Clubs '
                accessoryRight={SearchIcon}
            />
            
            <List
                data={clubs}
                renderItem={renderItem}
            />
            
        </Layout>
    )
}