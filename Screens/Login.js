import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Layout, Text, Input, Button, Icon } from '@ui-kitten/components'
import { Loginstyles } from '../Styles/Loginstyles'
import httpClient from '../services/httpClient'
import { updateTenant, updateTenantToken } from "../redux/actions/commonStateActions";
import { useSelector, useDispatch } from 'react-redux';
import { SECURITY_URL, SECURITY_TENANT_LOGIN_URL } from "@env"

export default Login = ({ navigation: { navigate } }) => {

  const [tenantEmail, setTenantEmail] = useState('');
  const [password, setpassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPassword, setisValidPassword] = useState(true);

  const securityTenantLoginURL = `${SECURITY_URL}${SECURITY_TENANT_LOGIN_URL}`;
  useSelector(state => state.token)
  const dispatch = useDispatch();
  const initialState = useSelector(state => state.commonStateReducer);

  const [emailstatus, setEmailStatus] = useState(true)
  const [passwordstatus, setPasswordStatus] = useState(true)

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const getTenantLogin = () => {
    try {
      if (!tenantEmail  || !password ) {
        if(!tenantEmail)
        {
          setEmailStatus(false);
        }
        if(!password)
        {
          setPasswordStatus(false);
        }
      } else {             
      console.log('hello', securityTenantLoginURL);
      httpClient.httpPost(securityTenantLoginURL, {
        email: tenantEmail, password: password
      }, function (error, response) {

        if (error) {
          console.error('Error Recieved =', error.response.data);
          const ERROR = JSON.stringify(error)
          console.log('Received Error', ERROR)

          if (error.response.data.message === 'Username not found') {

            setisValidEmail(!isValidEmail)
            setEmailStatus(false)
          }
          if (error.response.data.message === 'Authentication failed : Password mismatch') {
            console.log(error.response.data.message);
            setisValidPassword(!isValidPassword)
            setPasswordStatus(false)
          }
        }
        else {
          console.log("Response", response);
          console.log("token", response.result.token);
          console.log("status", response.status);
          console.log("tenantId", response.result.tenant._id);
          console.log("response.result.tenant.defaultPassword", response.result.tenant.defaultPassword);
          if (response.status == 'success') {
            dispatch(updateTenant(response.result.tenant));
            dispatch(updateTenantToken(response.result.token));


            navigate(screens.enterthecode.name,
              {
                tenantEmail: tenantEmail,
                tenantToken: response.result.token,
                tenantPhoneNo: response.result.tenant.phoneNo,
                defaultPassword: response.result.tenant.defaultPassword,
                tenantId: response.result.tenant._id
              });

          }
        }
      })
    }
    } catch (err) {
      console.log('Caught error', err);
    }
  }
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  const emailValidate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      //setisValidEmail(false);
      //setTenantEmailValue("Email is Not Correct")
      return false;
    }
    else{
      return true;
    }   
  };
  
  return (
    <Layout style={Loginstyles.maincontainer}>
      <Layout style={Loginstyles.topcontainer}>
        <Text style={Loginstyles.signin}>Sign In</Text>
        <Text style={Loginstyles.text}>Please enter your credentials to proceed</Text>
      </Layout>
      <Layout style={Loginstyles.container2}>
        <Input
          style={Loginstyles.emailInput}
          placeholder='Email'
          value={tenantEmail}
          status={emailstatus ? null : 'danger'}
          label={<Text style={Loginstyles.label}>EMAIL</Text>}
          onChangeText={item => {
            console.log(emailValidate(item))
            setisValidEmail(emailValidate(item))
            setTenantEmail(item)
            //setisValidEmail(true)
            setEmailStatus(true)
          }
          }
        />
        {isValidEmail ? null :
          <Layout style={Loginstyles.errornotification}>
            <Icon
              name='alert-circle-outline'
              style={Loginstyles.iconstyle}
            />
            <Text style={Loginstyles.errormessage}> Email is incorrect</Text>
          </Layout>
        }
        <Input
          style={Loginstyles.passewordInput}
          placeholder='Password'
          value={password}
          label={<Text style={Loginstyles.label}>PASSWORD</Text>}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          status={passwordstatus ? null : 'danger'}
          onChangeText={item => {
            setpassword(item)
            setisValidPassword(true)
            setPasswordStatus(true)
          }
          }
        />
        {isValidPassword ? null :
          <Layout style={{ flexDirection: 'row' }}>
            <Icon
              name='alert-circle-outline'
              style={Loginstyles.iconstyle}
            />
            <Text style={Loginstyles.errornotification} >password is incorrect</Text>

          </Layout>
        }
        <Text style={Loginstyles.forgetpassword}>Forget Password?</Text>

        <Button style={Loginstyles.button} onPress={() => getTenantLogin()}>SIGN IN</Button>

      </Layout>
    </Layout>
  );
};
