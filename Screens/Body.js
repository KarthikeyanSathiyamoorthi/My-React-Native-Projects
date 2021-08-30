import React from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Globalstyles, images } from '../Styles/Global'
import Card from '../Shared/Card'

export default function Body({ route: { params }, navigation }) {

    //const {firstName} = params;
    //const child = params.children



    return (
        <View style={Globalstyles.container}>

            <Card>
                <Text style={Globalstyles.titletext}>FirstName: {params.firstName}</Text>
                <Text style={Globalstyles.titletext}>LastName: {params.lastName}</Text>
                <Text style={Globalstyles.titletext}>E-Mail: {params.email}</Text>
                <Text style={Globalstyles.titletext}>PhoneNo: {params.phoneNo}</Text>
                <Text style={Globalstyles.titletext}>Sex: {params.sex}</Text>
                <Text style={Globalstyles.titletext}>Date-Of-Birth: {params.dob}</Text>
                <Text style={Globalstyles.titletext}>Children: {params.children}</Text>


                <TouchableOpacity style={styles.rating} onPress={() => navigation.navigate('Last')}>
                    <Text style={{ fontWeight: 'bold' }}>Children:</Text>
                    <Image source={images.ratings[params.children]} />
                </TouchableOpacity>


            </Card>


        </View>
    )
}
const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 2,
        borderTopColor: '#eee'

    }
})
