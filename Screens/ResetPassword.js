import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Input, Button } from '@ui-kitten/components'
import { Loginstyles } from '../Styles/Loginstyles'

export default ResetPassword = () => {
    const [Email, setEmail] = useState(null);

    return(
        <Layout style={{ flex: 1 }}>
            <Layout style={Loginstyles.container}>
                <Text style={Loginstyles.signin}> Reset Password </Text>
                <Text style={Loginstyles.text}>Please enter your email address. A code will {"\n"}
                be sent to your email</Text>
                
                <Input
                style={Loginstyles.emailInput}
                value={Email}
                label="EMAIL"
                placeholder="Email"
                onChangeText={item => setEmail(item.trim())}
                />

            <Button style={styles.button} >SIGN IN</Button>
            </Layout>
        </Layout>
    )
}
const styles = StyleSheet.create({
    button: {
        marginLeft: 24,
        marginRight: 24,
        marginTop: 150
    }

})
