import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Guest';
import DashBoard from './DashBoard';

const useGuestRoutes = () => {
	const Stack = createNativeStackNavigator();
	return (
		<>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="DashBoard" component={DashBoard} />
		</>
	)
}

export default useGuestRoutes;