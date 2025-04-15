import React, { useEffect } from 'react';
import { Text, Image } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { WEBCLIENTID } from '../../config';
import { Button } from '../../components/Field';
import Container from '../../components/container';
import { navigate } from '../../helpers/navigation';
import { Home as HomeImage } from '../../assets/images';

import styles from './styles';

const Login = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: WEBCLIENTID,
            forceCodeForRefreshToken: true,
            offlineAccess: true,
        });
    }, []);

    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const userInfo = await GoogleSignin.signIn();
            if (userInfo) {
                console.log("userInfo", userInfo);
                navigate("DashBoard");
            }
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("User cancelled the login flow");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("Operation (e.g. sign in) is in progress already");
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("Play services not available or outdated");
            } else {
                console.log("Some other error happened", error);
            }
        }
    }

    return (
        <Container header={false} style={styles.container}>
            <Image source={HomeImage} style={styles.home} />
            <Text style={styles.title}>Sign in to continue shopping smart!</Text>
            <Button text="Sign in with Google" onPress={onGoogleButtonPress} />
        </Container>
    );
};


export default Login;
