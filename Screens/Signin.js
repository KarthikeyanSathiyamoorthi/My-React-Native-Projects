import React, { useState, useEffect } from 'react';
import { Button,
  Input,
  Layout,
  Text,
  Icon } from '@ui-kitten/components'
import commonStyles from '../assets/commonStyles';
import SigningHeader from '../components/siningHeader';
import httpClient from '../services/httpClient';
import { TouchableWithoutFeedback } from 'react-native';
import screens from '../common/screens';
const tenantLoginURL ="http://192.168.1.5:3002/api/tenantlogin";
const VERIFY_OTP="http://192.168.1.5:3003/api/auth/OTP1/";
const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);


export default Signin = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  useEffect(() => { 

   }, [])

   const getTenantLogin = async () => {
    console.log('Getting tenant login details');
    try {  
      
      const url = `${tenantLoginURL}/${userName}/${password}`;     
      httpClient.httpGet(url).then((response)=>{
        console.log("login",response);
        if(response)
        {
          navigation.navigate(screens.otpVerification.name, 
            {userName:userName });
        }
        else{
          
        }
      
      });

      } catch (error) {
        console.log("error",error)
        console.error(error);
      }
    };
   
  const headingObject = {
    heading: 'Sign In',
    subHeading: 'Please enter your credentials to proceed',
  };
  
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  return ( 
     <Layout style={commonStyles.mainContainer}>
       <SigningHeader
        heading={headingObject.heading}
        subHeading={headingObject.subHeading}       
      />
      <Layout style={commonStyles.formLayout}>
       <Input
          style={commonStyles.formControl}
          value={userName}
          label="User Name"
          placeholder="User Name"
          onChangeText={item => setUserName(item.trim())}

        />

        <Input
          style={commonStyles.formControl}
          value={password}
          label="Password"
          placeholder="Password"
          caption='Should contain at least 8 symbols'  
          accessoryRight={renderIcon}
          captionIcon={AlertIcon}       
          secureTextEntry={secureTextEntry}
          onChangeText={(password) => setPassword(password)}
        /> 
    </Layout> 
    <Layout style={commonStyles.formFooter}>   
        <Button
          style={commonStyles.formFooterControl}
          onPress={() => {
            console.log(userName,password);
            getTenantLogin();
          }}>
          LOGIN
        </Button>     
    </Layout>
    </Layout>  
    );  
};
