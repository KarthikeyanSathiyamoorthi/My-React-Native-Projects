import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon, Input, Layout, Button, Text } from '@ui-kitten/components';
import { Newpasswordstyles } from '../Styles/Newpasswordstyles';
import httpClient from '../services/httpClient';
import {
  TENANT_URL,
  TENANT_LOGIN_NEW_PASSWORD
} from "@env"


export default Newpassword = ({ route , navigation }) => {

  const [Newpassword, setNewpassword] = useState('');
  const [Repeatpassword, setRepeatpassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);
  const [issamePassword, setisSamePassword] = useState(true);
  const [status, setStatus] = useState(true)
  const { tenantEmail, tenantToken, tenantId} = route.params;
  const tenant_Login_NewPassword_URL = `${TENANT_URL}${TENANT_LOGIN_NEW_PASSWORD}`;

  console.log("NewPassword",tenantEmail);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const toggleSecureEntry1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const requestResetPasswordParms = { tenantEmail: tenantEmail, password: Newpassword };
  const resetPassword = async () => {
     if (Newpassword === Repeatpassword) {

            console.log('reset password');
            try {
              httpClient.httpPutWithToken(
                tenant_Login_NewPassword_URL,
                requestResetPasswordParms, tenantToken
              ).then((response) => {
                console.log("resetPassword", response);
               if(response.status === 'success'){
                navigation.navigate(screens.dashboard.name, { tenantId: tenantId } )

               }
              })

             } catch (error) {
              console.log("error", error)
              console.log("error",error)
               console.error(error);
             }
          } else {
            setisSamePassword(!issamePassword)
            setStatus(false)
          }
        };


  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  const renderIcon1 = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry1}>
      <Icon {...props} name={secureTextEntry1 ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={Newpasswordstyles.maincontainer}>
      <Layout style={Newpasswordstyles.topcontainer}>
        <Text style={Newpasswordstyles.signin}> New Password </Text>
        <Text style={Newpasswordstyles.text}>Create a new password</Text>
      </Layout>



      <Input
        style={Newpasswordstyles.emailInput}
        value={Newpassword}
        label="NEW PASSWORD"
        placeholder="Password"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        status={status ? null : 'danger'}
        onChangeText={(item) => {
          setNewpassword(item)
          setisSamePassword(true)
          setStatus(true)
        }}
      />
      {issamePassword ? null :
        <Layout style={Newpasswordstyles.errornotification}>
          <Icon
            name='alert-circle-outline'
            style={Newpasswordstyles.iconstyle}
          />
          <Text style={Newpasswordstyles.errormessage} >Password isn't matched</Text>
        </Layout>
      }

      <Input
        style={Newpasswordstyles.emailInput}
        value={Repeatpassword}
        label="REPEAT PASSWORD"
        placeholder="Password"
        accessoryRight={renderIcon1}
        secureTextEntry={secureTextEntry1}
        status={status ? null : 'danger'}
        onChangeText={(item) => {
          setRepeatpassword(item)
          setisSamePassword(true)
          setStatus(true)
        }}
      />

      {issamePassword ? null :
        <Layout style={Newpasswordstyles.errornotification}>
          <Icon
            name='alert-circle-outline'
            style={Newpasswordstyles.iconstyle}
          />
          <Text style={Newpasswordstyles.errormessage} >Password isn't matched</Text>
        </Layout>
      }

      <Button style={Newpasswordstyles.button}
        onPress={() => {
          resetPassword();
        }}>CONTINUE
        </Button>
    </Layout>
  )
}
