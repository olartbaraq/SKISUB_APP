import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icons from '../components/Icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import { useTheme } from 'react-native-paper';
import Homepage from '../screens/Homepage';
import Wallet from '../screens/Wallet';
import Services from '../screens/Services';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();


function BottomTab() {

    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent"


  return (
    <>

        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused}) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home-minus-blue' : 'home-minus-black';
                } else if (route.name === 'Services') {
                    iconName = focused ? 'filetext1-blue' : 'filetext1-black';
                } else if (route.name === 'Wallet') {
                    iconName = focused ? 'wallet-membership-blue' : 'wallet-membership-black';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'account-outline-blue' : 'account-outline-black';
                } 
                return <Icons name={iconName} />;
                }
            })}

            initialRouteName='Home'
            activeColor="#1000C7"
            inactiveColor="#000"
            barStyle={{ 
                backgroundColor: '#fff',
                height: windowHeight * 0.085,
                color: '#000',
                fontFamily: 'Roboto',
                }}
            >
            
            <Tab.Screen 
                name="Home" 
                component={Homepage}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                }}
            />

            <Tab.Screen 
                name="Services" 
                component={Services}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Services',
                }}
            />

            <Tab.Screen 
                name="Wallet" 
                component={Wallet}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Wallet'
                }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                }} 
            />

        </Tab.Navigator>
    </>
  );
};


export default BottomTab;