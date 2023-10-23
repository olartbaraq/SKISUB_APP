import React, { useState, useReducer } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Pressable, Alert } from 'react-native';
import Header from '../components/Header';
import Icons from '../components/Icons';
import { useAccountType } from '../utils/state';
import { windowHeight, windowWidth, checkEmail } from '../utils/globalVariables';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';



function Login() {

  const navigation = useNavigation();

  const {Email, setEmail, Password, setPassword, hidePassword, setHidePassword} = useAccountType();
  const [signInText, setSigninText ] = useState('Sign In');
  const [isSigningIn, setIsSigningIn] = useState(false);


  const togglePasswordVisibility = () => {
    setHidePassword(prevValue => !prevValue);
  };


  const SignUpHandler = () => {
    navigation.navigate('SignUp');
  };

  const forgotPasswordHandler = () => {
    navigation.navigate('ForgotPassword');
  };

  const SignInHandler = async () => {

    if (!Email || !Password) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Kindly input all required data',
      });

      setSigninText('Sign In');

      setIsSigningIn(prevValue => prevValue);
      return ;
    }

    if(checkEmail(Email) === false) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Kindly enter a correct email address',
      });

      setSigninText('Sign In');

      setIsSigningIn(prevValue => prevValue);
      return ;
    }

    setIsSigningIn(prevValue => !prevValue);

    setSigninText('Signing in...')


    const body = {
      "username": Email,
      "password": Password
    }


    try {
      const loginResponse = await axios.post('http://127.0.0.1:8000/account/login/', body);

      const token = loginResponse.data?.token;
      const email = loginResponse.data?.data?.email;
      const first_name = loginResponse.data?.data?.first_name;
      const last_name = loginResponse.data?.data?.last_name;
      const phone = loginResponse.data?.data?.phone;

      if (loginResponse.data?.status_code === 200 && token) {

        EncryptedStorage.setItem('Token', token);
        AsyncStorage.setItem('email', email);
        AsyncStorage.setItem('firstName', first_name);
        AsyncStorage.setItem('lastName', last_name);
        AsyncStorage.setItem('Phone', phone);

        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'login successful',
          autoClose: 500,
          onHide: () => {
            navigation.navigate('BottomTab');
          },
        });
      } else {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Danger',
          textBody: 'Incorrect Email/Password',
        });
      }
    } catch (error) {
      //console.error(error)

      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Danger',
        textBody: 'Incorrect Email/Password',
      });

      setSigninText('Sign In');
      setIsSigningIn(false);
    }

  };

  return (
    <>

      <Header 
      title="Login"
      icon = "chevron-left"
      // onPress={BackHandler}
      />
  
      <AlertNotificationRoot
        theme={'dark'}
      >
        <View style={styles.loginContainer}> 
          <View style={styles.login_header}>
              <Text style={styles.login_text}>Sign In </Text>
              <Icons name={"hand-wave"} />
          </View>
          <Text style={styles.text}>
              Welcome back, Log in to your account 
          </Text>

          <View style={styles.login_input}>
            <TextInput
              style={styles.input}
              value={Email}
              onChangeText={text => setEmail(text)}
              keyboardType='email-address'
              placeholder='Email'
            />

            <View style={styles.passwordInput}>

              <TextInput
                style={styles.input}
                value={Password}
                onChangeText={password => setPassword(password)}
                keyboardType='numbers-and-punctuation'
                placeholder='Password'
                secureTextEntry={hidePassword}
                underlineColorAndroid="transparent"
                autoComplete='off'
              />

              <Pressable onPress={togglePasswordVisibility}>
                <Icons name={hidePassword ? "eye-off" : "eye"} />
              </Pressable>
            </View>
          </View>
          <TouchableOpacity
          onPress={forgotPasswordHandler}
          >
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          
            <TouchableOpacity
            style={[styles.SignIn, { backgroundColor: isSigningIn ? '#999999' : '#1000C7' }]}
            onPress={SignInHandler}
            >
              <Text style={styles.signInText}>{signInText}</Text>
              {/* <Text style={styles.signInText}>{state.signInText}</Text> */}
            </TouchableOpacity>
         
        </View>
      
        <View style={styles.sign_up}>
          <Text style={styles.Text}>
            Don't have an account? 
          </Text>
          <TouchableOpacity
          onPress={SignUpHandler}>
            <Text style={styles.button_sign_up}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      
      </AlertNotificationRoot>
    </>
  )
}

const styles = StyleSheet.create({
 loginContainer: {
   marginTop: 25,
   marginHorizontal: 25,
   height: windowHeight * 0.65
 },

 login_header: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 },

 login_text: {
  color: '#000',
  fontFamily: 'Roboto',
  fontSize: 30,
  fontWeight: 'bold',
  marginRight: 5,
 },

 text: {
  color: '#6B7280',
  fontSize: 17,
  fontFamily: 'Roboto',
  marginTop: 10
 },

 login_input: {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginTop: 50
 },

 input: {
  width: windowWidth * 0.85,
  height: 60,
  borderRadius: 15,
  marginBottom: 20,
  paddingHorizontal: 10,
  color: '#000',
  backgroundColor: '#F2F2F2',
  fontFamily: 'Roboto',
  fontSize: 18,
  fontWeight: '700'
},

forgotPassword: {
  color: '#1000C7',
  fontFamily: 'Roboto',
  fontSize: 22,
  fontWeight: 'bold',
  marginTop: 20,
  marginLeft: 5,
},

SignIn: {
  height: windowHeight  * 0.08,
  width: windowWidth * 0.85,
  backgroundColor: '#1000C7',
  marginLeft: 5,
  marginTop: 30,
  borderRadius: 20,
  textAlign: 'center'
},

signInText: {
  color: '#fff',
  alignSelf: 'center',
  paddingVertical: 18,
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'bold',
},

sign_up: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},

Text: {
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: '700',
  marginRight: 5
},

button_sign_up: {
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'bold',
  color: '#1000C7',
},


});

export default Login;