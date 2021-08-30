import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { QRstyles } from '../Styles/QRstyles'
import { Button, Layout, Modal, Text } from '@ui-kitten/components';
import { BlurView } from '@react-native-community/blur';
import { TENANT_URL, CUSTOMER_QRCODE_URL } from "@env"
import screens from "../common/screens";
import httpClient from "../services/httpClient";
import QRCode from 'react-native-qrcode-svg';
import { updateTenant, updateOtpToken } from "../redux/actions/commonStateActions";
import { useSelector, useDispatch } from "react-redux";

export default GenerateQRcode = ({ route, navigation }) => {

  const { accountId, deviceId, clubId } = route.params;

  const [isLoaded, setIsLoaded] = useState(false);
  const [qrBase64Logo, setQrBase64Logo] = useState(null);
  const [qrUserValue, setQrUserValue] = useState(null);
  const [hashedQrCode, setHashedQrCode] = useState(null);


  const dispatch = useDispatch();
  console.log(dispatch);
  const initialState = useSelector((state) => state.commonStateReducer);

  console.log("dashboardInitialState", initialState.tenant_token);


  useEffect(() => {
    if (!isLoaded) setIsLoaded(true);
  });

  useEffect(() => {
    if (!isLoaded) {
      console.log("QR Code Details");
      const qrCodeObj = { accountId: accountId, clubId: clubId };
      console.log("accountId", accountId);
      console.log("clubId", clubId);
      const customerQrGenerationURL = `${TENANT_URL}${CUSTOMER_QRCODE_URL}`;
      httpClient.httpPostWithToken(customerQrGenerationURL, qrCodeObj, initialState.tenant_token)
        // , function (error, response) {
        // if (error) {
        //   console.log("ERROR");
        //   console.error('Error Recieved =', error.response.data)
        // }            
        // if (response.status == 'success') {
        .then((response) => {
          console.log("STATUS");

          console.log("QR code", response.result);
          console.log("QR hashvalue", response.result.hashedQrCode);
          console.log("QR url", response.result.url);
          console.log("QR Value", response.result.qrValue);
          setQrUserValue(response.result.qrValue);
          setQrBase64Logo(response.result.url);
          setHashedQrCode(response.result.hashedQrCode);

        }).catch((err) => { console.log("error", err); });
      // console.log("STATUS");

      //  console.log("QR code",response.result);
      //  console.log("QR hashvalue",response.result.hashedQrCode);
      //  console.log("QR url",response.result.url);
      //  console.log("QR Value",response.result.qrValue);
      //  setQrUserValue(response.result.qrValue);
      //  setQrBase64Logo(response.result.url);
      //  setHashedQrCode(response.result.hashedQrCode);
      // }

    }
  }, [isLoaded]);
  console.log("hashedQrCode", hashedQrCode);
  console.log("qrBase64Logo", qrBase64Logo);
  return (
    <Layout style={QRstyles.container}>
      <Layout style={QRstyles.topcontainer}>

        <Image source={require('../assets/qr-code-sample-with-text-i-love-you-vector-26810010.jpg')} style={QRstyles.blurimage} />


      </Layout>
      <Text style={QRstyles.text}> Ask the user to scan this QR Code from his phone </Text>
      <Button style={QRstyles.blurbutton} >CLOSE</Button>

      <BlurView
        style={QRstyles.blur}
        //viewRef={viewRef}
        reducedTransparencyFallbackColor='white'
        blurType='light'
        blurAmount={3} />

      <Modal
        transparent={true}
        visible={true}
      // animationType='fade'
      >
        <Layout style={QRstyles.layout}>
          <Layout style={QRstyles.QRimage}>
            {hashedQrCode && qrBase64Logo ?
              <QRCode
                size={200}
                //logoMargin={20}
                value={hashedQrCode}
                logo={{ uri: qrBase64Logo }}
              />
              : null
            }
          </Layout>

          <Text style={QRstyles.text}> Ask the user to scan this QR Code from his phone </Text>
          <Button style={QRstyles.button} onPress={() => navigation.goBack()}>CLOSE</Button>
        </Layout>
      </Modal>

    </Layout>
  );
};

