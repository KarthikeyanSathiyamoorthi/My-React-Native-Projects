import React,{useEffect, useState} from 'react'
import { View,Text, Button, FlatList,SafeAreaView,ActivityIndicator , TouchableOpacity } from 'react-native'
import {Globalstyles} from '../Styles/Global'
import Card from '../Shared/Card'
import Useeffect from './Useeffect'
import axios from 'axios'


const Item = ({firstName}) => (
    <View>
        <Text>{firstName}</Text>
    </View>
);

const DATA = [
    {
        _id:'123',
        firstName:'First-Item'
    },
    {
        id:'1234',
        firstName:'Second-Item'
    },
    {
        id:'12345',
        firstName:'Third-Item'
    }

] 

export default function Datafetching () {
    
    

    const [isLoading,setLoading] = useState(true)
    const [data,setData] = useState ([])
 
    const renderItem = ({item}) => (
        <Item firstName = {item.firstName}/>
    )
  

    useEffect (() => {
        axios.get ("http://10.0.2.2:3000/api/customers" )
       .then(response =>{ 
       const values = response.data
       console.log(response.data)
       console.log("Values of customers = "+JSON.stringify(values.customers))
       setData(values.customers)
       })
       .catch((error) => alert(error))
        .finally(setLoading(false))
    },[])

    return (
        <SafeAreaView>
         <FlatList
        keyExtractor={item => item._id}
        data={data}
        renderItem = {renderItem}
        
        />
          <Text>{data.firstName}</Text>  
        </SafeAreaView>
    )
}


   