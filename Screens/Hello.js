import React,{useState} from 'react'
import { View,Text, Button, FlatList, TouchableOpacity } from 'react-native'
import {Globalstyles} from '../Styles/Global'
import Card from '../Shared/Card'
import axios from 'axios'

const getCustomerHandler = (() => {
   console.log('Getting customer details')
    
    axios.get ('http://10.0.2.2:3000/api/customers')
        .then(response =>{ 
          console.log( response.data)
         }).catch((error) =>{
             console.error(error)
          })
        // //let json = await response.json()
        //console.log("Got Customers ="+ json.customers)
        //return json
   
    })

   // const getCustomerHandler =async() => {
       // console.log("Getting customer details")
       // try{
          //  const response = await fetch('http://10.0.2.2:3000/api/customers')
          //  const json = await response.json()
           // console.log('Got Customers = ' + json)
         //  return json;
       // }catch(error){
          //  console.error(error)
       // }
   // }
export default function Hello ({ navigation: { navigate } }) {
    //this.getCustomerHandler = this.getCustomerHandler.bind()

        const [persons,setpersons] =  useState([
            {
            firstName: "Karthikeyan",
            lastName: "Sathiyamoorthi",
            email: "tamilkn23@gamil.com",
            phoneNo: "7825002303",
            sex: "Male",
            dob: "23-03-1999",
            children:5
            }
           /* {
               firstName: "Karthik",
                lastName: "Sathiya",
                email: "tamilk3@gamil.com",
                phoneNo: "7825702303",
                sex: "Male",
                dob: "23-03-1998",
                children:3
            },
            {
                    firstName: "tamil",
                    lastName: "Sathiyamoorthi",
                    email: "tamilkn2@gamil.com",
                    phoneNo: "7825002393",
                    sex: "Male",
                    dob: "23-03-1789",
                    children:4
            },*/
        ])
        
     
         return(
            <View style = {Globalstyles.container}>
              
              <FlatList 
               keyExtractor={(item) => item.phoneNo}
               data = {persons}
               renderItem ={( { item }) => (
                <TouchableOpacity onPress = {() => navigate ('Body',
                {firstName:item.firstName ,lastName:item.lastName, email:item.email,
                phoneNo:item.phoneNo,sex:item.sex,dob:item.dob,children:item.children})}>
                
                <Card>   
                <Text style = {Globalstyles.titletext}>{item.firstName} </Text> 
                </Card>
               
                </TouchableOpacity>
               )}
               
               />
            <View style ={{marginBottom:280}}>
                <Button style = {{mariginTop:30}} title='Customer-Details' onPress={getCustomerHandler}  />
                <View>
                <Button title ='ABOUT-SCREEN' onPress={() => navigation.navigate ('About')} />
           
                </View>
            </View>

            </View>
        )
        }
        
      