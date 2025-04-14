import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import { navigate } from '../helpers/navigation';
import BottomItem from '../components/BottomItem';
import { colors, normalize, size } from '../helpers/variables';

import Home from '../pages/Menu/Home';
import Cart from '../pages/Menu/Cart';
import Wishlist from '../pages/Menu/Wishlist';

const Tab = createBottomTabNavigator();

const DashBoard = () => {
    const dd = Platform.OS === 'android' ? { paddingBottom: size.five } : '';
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                animation: "fade",
                tabBarStyle: {
                    position: 'absolute',
                    shadowColor: colors.black,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    borderTopLeftRadius: size.xxx_small,
                    borderTopRightRadius: size.xxx_small,
                    height: Platform.OS === 'android' ? size.xxx_big : normalize(90), ...dd,
                    paddingHorizontal: size.xxx_small
                },
            })}
        >
            <Tab.Screen name="Home" component={Home}
                listeners={() => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigate('Home')
                    }
                })}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <BottomItem icon="home" isActive={focused} text="Home" />
                    )
                }}
            />
            <Tab.Screen name="wishlist" component={Wishlist}
                listeners={() => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigate('wishlist')
                    }
                })}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <BottomItem icon="heart" isActive={focused} text="Wishlist" />
                    )
                }}
            />
            <Tab.Screen name="cart" component={Cart}
                listeners={() => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigate('cart')
                    }
                })}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <BottomItem icon="cart" isActive={focused} text="Card" />
                    )
                }}
            />
        </Tab.Navigator>
    )
};

export default DashBoard;