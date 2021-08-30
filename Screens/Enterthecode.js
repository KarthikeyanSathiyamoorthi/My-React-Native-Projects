import React, { useEffect, useState } from 'react';
import { Layout, Text, Input, Button, Icon } from '@ui-kitten/components';
import { Enterthecodestyles } from '../Styles/Enterthecodestyles';
import screens from "../common/screens";
import httpClient from "../services/httpClient";
import { updateTenantToken } from "../redux/actions/commonStateActions";
import { useSelector, useDispatch } from "react-redux";
import {
    SECURITY_URL,
    SECURITY_SEND_OTP_URL,
    SECURITY_VERIFY_OTP_URL
} from "@env"

export default Enterthecode = ({ route, navigation }) => {

    const { tenantEmail, tenantToken, tenantPhoneNo, defaultPassword, tenantId } = route.params;
    console.log("defaultPassword", defaultPassword);
    console.log("otp", tenantEmail);
    console.log("tenantId", tenantId);
    console.log("tenantToken", tenantToken);
    console.log("tenantPhoneNo", tenantPhoneNo);

    const [otp, setOtp] = useState(null);
    const [otpSession, setOtpSession] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isValidOtp, setIsValidOtp] = useState(true);   


    const security_Send_Otp_URL = `${SECURITY_URL}${SECURITY_SEND_OTP_URL}`;
    const security_Verify_Otp_URL = `${SECURITY_URL}${SECURITY_VERIFY_OTP_URL}`;

    useSelector(state => state.token);
    const dispatch = useDispatch();
    const initialState = useSelector(state => state.commonStateReducer);
    console.log("initialState", initialState);

    useEffect(() => {
        if (!isLoaded) setIsLoaded(true);
    });

    useEffect(() => {
        if (!isLoaded) {
            sendOTP();
        }
    }, [isLoaded]);
    
    const sendOTP = () => {
        console.log("inside useeffect")
            const sendOTPUrl = `${security_Send_Otp_URL}91${tenantPhoneNo}`;
            console.log("initialState.tenant_token", initialState.tenant_token)
            httpClient.httpGetWithToken(sendOTPUrl, null, tenantToken).then((otpResponse) => {
                console.log(otpResponse.result.otpSession);
                if (otpResponse && otpResponse.status === 'success') {
                    setOtpSession(otpResponse.result.otpSession);

                }
            })
                .catch((err) => { });
    };
    const onContinuePress = () => {
        console.log('onContinuePress', otp, otpSession);
        if (otp) {                  
        const otpVerificationObj = { otp: otp, otpSession: otpSession };
        httpClient
            .httpPostWithToken(
                security_Verify_Otp_URL,
                otpVerificationObj, tenantToken
            )
            .then((response) => {
                console.log("otpVerification", response);
                console.log("otpToken", response.result.token);

                if (response && response.status === 'success') {

                    dispatch(updateTenantToken(response.result.token));

                    if (defaultPassword) {
                        navigation.navigate(screens.newPassword.name,
                            { tenantEmail: tenantEmail, tenantToken: tenantToken, tenantId: tenantId }
                        );
                    } else {
                        navigation.navigate(screens.dashboard.name, { tenantId: tenantId })
                    }
                }
            })
            .catch((err) => { console.log("error", err); });
        }
        else
        {
            setIsValidOtp(false);
        }
    }

    function getMaskedMobileNumber(value) {
        return `xxxxxx${value.substring(6)}`;
    }

    return (
        <Layout style={Enterthecodestyles.maincontainer}>
            <Layout style={Enterthecodestyles.topcontainer}>
                <Text style={Enterthecodestyles.signin}> Enter the code</Text>
                <Text style={Enterthecodestyles.text}>The code was sent to your mobile number</Text>
            </Layout>            
            <Text style={Enterthecodestyles.otpInfoText} status="info" category="s1">
                Please enter the OTP sent to {getMaskedMobileNumber(tenantPhoneNo)}
            </Text>
            <Input
                style={Enterthecodestyles.emailInput}
                value={otp}
                label="CODE"
                placeholder="Enter the code"
                maxLength={6}
                keyboardType="number-pad"
                onChangeText={item => setOtp(item)}
            />
            {isValidOtp ? null :
          <Layout style={Enterthecodestyles.errornotification}>
            <Icon
              name='alert-circle-outline'
              style={Enterthecodestyles.iconstyle}
            />
            <Text style={Enterthecodestyles.errormessage}> Enter the code</Text>
          </Layout>
        }
            <Button style={Enterthecodestyles.continuebutton}
                onPress={() => {
                    onContinuePress();
                }}
            >CONTINUE</Button>
            <Button style={Enterthecodestyles.resendbutton}
                onPress= {() =>
                {
                    sendOTP();
                }}
            >RESEND IN 00:30</Button>
        </Layout>

    )
}
