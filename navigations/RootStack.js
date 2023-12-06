import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect }from 'react';
import BackgroundColor from 'react-native-background-color';
import { Login, Register, ForgotPassword, ChangePassword, BottomTab, Notification,
   EditProfile, Settings, ResetPassword, Notifications, DeleteAccount, 
   Referral, HelpandSupport, Legal, FundWallet, Airtime, CarBook,
   DataPurchase, CarRental, CableTV, Electricity, Flight, Hotel, HotelBook
} from '../utils/ScreenExport';

const Stack = createStackNavigator();


function RootStack() {

    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          border: "transparent",
          background: '#fff',
        }
      }
      useEffect(() => {
        BackgroundColor.setColor('#FFFFFF');
    }, []);


  return (
    <>
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName='Splash'
                screenOptions={{
                    header: () => null
                }}
            >
                <Stack.Screen name="Login" component={Login} />

                <Stack.Screen name="SignUp" component={Register} />

                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

                <Stack.Screen name="ChangePassword" component={ChangePassword} />

                <Stack.Screen name="BottomTab" component={BottomTab} />

                <Stack.Screen name="Notification" component={Notification} />

                <Stack.Screen name="Fund Wallet" component={FundWallet} />

                <Stack.Screen name="Edit Profile" component={EditProfile} />

                <Stack.Screen name="Settings" component={Settings} />

                <Stack.Screen name="Reset Password" component={ResetPassword} />

                <Stack.Screen name="Notifications settings" component={Notifications} />

                <Stack.Screen name="Delete Account" component={DeleteAccount} />

                <Stack.Screen name="Referral" component={Referral} />

                <Stack.Screen name="Support" component={HelpandSupport} />

                <Stack.Screen name="Legal" component={Legal} />

                <Stack.Screen name="Airtime" component={Airtime} />

                <Stack.Screen name="Data Purchase" component={DataPurchase} />

                <Stack.Screen name="Car Rental" component={CarRental} />

                <Stack.Screen name="Cable TV" component={CableTV} />

                <Stack.Screen name="Electricity" component={Electricity} />

                <Stack.Screen name="Flight" component={Flight} />

                <Stack.Screen name="Hotel" component={Hotel} />

                <Stack.Screen name="Car Book" component={CarBook} />

                <Stack.Screen name="Hotel Book" component={HotelBook} />

            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};

export default RootStack;