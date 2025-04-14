import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from "react-native-bootsplash";

import useGuestRoutes from './GuestRoutes';
import { navigationRef } from '../helpers/navigation';

const App = () => {
	const Stack = createNativeStackNavigator();

	// useEffect(() => {
	// 	hideSplash();
	// }, []);

	const hideSplash = async () => {
		await BootSplash.hide({ fade: true });
	};

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator initialRouteName={"DashBoard"} screenOptions={{ headerShown: false }}>
				{useGuestRoutes()}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;