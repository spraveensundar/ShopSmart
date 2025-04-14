import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { WEBCLIENTID } from '../../config';
// import { navigate } from '../../helpers/navigation';

const Login = () => {

    async function onGoogleButtonPress() {
        if (Platform.OS === 'android') {
            await GoogleSignin.configure({
                forceCodeForRefreshToken: true
            })
        } else {
            await GoogleSignin.configure({
                webClientId: WEBCLIENTID,
                forceCodeForRefreshToken: true,
            })
        }
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo) {
                console.log("userInfo ", userInfo);
                // dispatch(addPersonalInfo(get(userInfo, 'user')))
                // dispatch(authName('google'))
                // navigate("H");
            }
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("user cancelled the login flow")
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("operation (e.g. sign in) is in progress already")
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("play services not available or outdated")
            } else {
                console.log("some other error happened", error)
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <Button title="Sign in with Google" onPress={onGoogleButtonPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});

export default Login;
