import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable,TouchableOpacity, TextInput, Alert, ScrollView, } from 'react-native';
import { Header } from '../components';
import Icons from '../components/Icons';
import { windowHeight, windowWidth, checkEmail, checkPassword } from '../utils/globalVariables';
import { useAccountType } from '../utils/state';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';




function Register() {

  const navigation = useNavigation();

  const BackHandler = () => {
      navigation.goBack();
  }

  const {
    Email, setEmail, Password, setPassword, 
    hidePassword, setHidePassword, FirstName, setFirstName, LastName, 
    setLastName, confirmPassword, setConfirmPassword, Mobile, setMobile,
    hideConfirmPassword, setHideConfrimPassword
  } = useAccountType();

  const [signupText, setSignupText ] = useState('Sign Up');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [createAccount, setCreateAccount] = useState(null)
  const [error2Alert, setError2Alert] = useState(false);
  const [signupResp, setsignupResp] = useState(null);



  const togglePasswordVisibility = () => {
    setHidePassword(prevValue => !prevValue);
  };

  const toggleConfirmPasswordVisibility = () => {
    setHideConfrimPassword(prevValue => !prevValue);
  };


  const inputs = [
    {id:1, value: FirstName, name: 'FirstName', state: setFirstName, keyboardType:'numbers-and-punctuation', placeholder:'FirstName'},
    {id:2, value: LastName, name: 'LastName', state: setLastName, keyboardType:'numbers-and-punctuation', placeholder:'LastName'},
    {id:3, value: Email, name: 'Email', state: setEmail, keyboardType:'email-address', placeholder:'Email'},
    {id:4, value: Mobile, name: 'Phone Number', state: setMobile, keyboardType:'numeric', placeholder:'Phone Number'}
  ]


  const SignUpHandler = async () => {

    if (!FirstName || !LastName || !Email || !Mobile) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Kindly input all required data',
      });

      setSignupText('Sign Up');

      setIsSigningIn(prevValue => prevValue);
      return ;
    }

    if(checkEmail(Email) === false) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Kindly enter a correct email address',
      });

      setSignupText('Sign Up');

      setIsSigningIn(prevValue => prevValue);
      return ;
    }

    if(checkPassword(Password) === false) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: `
        'At least one uppercase letter.'
        'At least one lowercase letter.'
        'At least one digit.'
        'At least one special character (symbol).'
        'Minimum length of 8 characters.'
        `,
        button: 'close',
      });

      setSignupText('Sign Up');

      setIsSigningIn(prevValue => prevValue);
      return ;
    }

    if(Mobile.length !== 11) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Kindly enter 11 digit phone number',
      });

      setSignupText('Sign Up');

      setIsSigningIn(prevValue => prevValue);
      return ;
    }

    if(Password !== confirmPassword) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Passwords do not match, Check again',
      });

      setSignupText('Sign Up');

      setIsSigningIn(prevValue => prevValue);
      return ;
    }

    setSignupText('Creating User ...');

    setIsSigningIn(prevValue => !prevValue);


    const body = {
      "email": Email,
      "phone": Mobile,
      "first_name": FirstName,
      "last_name": LastName,
      "password": Password,
      "password2": confirmPassword,
      //"account_number": createAccount?.account_number
    }

    try {
      const loginResponse = await axios.post('http://127.0.0.1:8000/account/signup/', body);

      if (loginResponse.data && Password === confirmPassword) {
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Account created successfully',
          autoClose: 500,
          onHide: () => {
            navigation.navigate('Login');
          },
        });
       
      } else {
        console.log(loginResponse.data );
      //   Toast.show({
      //     type: ALERT_TYPE.WARNING,
      //     title: 'Warning',
      //     textBody: `${error.message}`,
      //   });
      //     setSignupText('Sign Up');
      //     setIsSigningIn(false);
      }
    } catch (error) {
    }
  }

  const SignInHandler = () => {
   navigation.navigate('Login')
  };

  const errorCircleImage = require('../assets/error-circle.png');

  return (
    <>
   
      <Header
      title="Register"
      icon="chevron-left"
      onPress={BackHandler}
      />

      <AlertNotificationRoot
        theme={'dark'}
      >
        <ScrollView>
          <View style={styles.loginContainer}> 
            <View style={styles.login_header}>
                <Text style={styles.login_text}>Get Started </Text>
                <Icons name={"hand-wave"} />
            </View>
            <Text style={styles.text}>
              Create an account so you can pay your
            </Text>
            <Text style={styles.text2}>
              bills and purchase top-ups faster
            </Text>

            <View style={styles.login_input}>
            {inputs.map((input) => (
              <View key={input.id}>
              <TextInput
              style={styles.input}
              value={input.value}
              onChangeText={text => input.state(text)}
              keyboardType={input.keyboardType}
              placeholder={input.placeholder}
            />
            </View>
            ))}
            
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

              <View style={styles.passwordInput}>
                <TextInput
                  style={styles.input}
                  value={confirmPassword}
                  onChangeText={password => setConfirmPassword(password)}
                  keyboardType='numbers-and-punctuation'
                  placeholder='Confirm Password'
                  secureTextEntry={hideConfirmPassword}
                  underlineColorAndroid="transparent"
                  autoComplete='off'
                />

                <Pressable onPress={toggleConfirmPasswordVisibility}>
                  <Icons name={hideConfirmPassword ? "eye-off" : "eye"} />
                </Pressable>
              </View>
            </View>

            <TouchableOpacity 
              style={[styles.signUpButton, { backgroundColor: isSigningIn ? '#999999' : '#1000C7' }]}
              onPress={SignUpHandler}
              disabled={isSigningIn}
            >
              <Text style={styles.signUpText}>{signupText}</Text>
            </TouchableOpacity>

            <View style={styles.sign_in}>
              <Text style={styles.Text}>
                Have an account? 
              </Text>
              <TouchableOpacity
              onPress={SignInHandler}
              >
                <Text style={styles.button_sign_in}>Login Here</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </AlertNotificationRoot>
    </>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 15,
    marginHorizontal: 25,
    height: windowHeight
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

  text2: {
   color: '#6B7280',
   fontSize: 17,
   fontFamily: 'Roboto',
   marginTop: 4
  },
 
  login_input: {
   flexDirection: 'column',
   justifyContent: 'flex-start',
   marginTop: 30
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

 signUpButton: {
  height: windowHeight  * 0.08,
  width: windowWidth * 0.85,
  backgroundColor: '#1000C7',
  marginLeft: 5,
  marginTop: 20,
  marginBottom: 50,
  borderRadius: 20,
  textAlign: 'center'
 },

 signUpText: {
  color: '#fff',
  alignSelf: 'center',
  paddingVertical: 18,
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'bold',
},

sign_in: {
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

button_sign_in: {
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'bold',
  color: '#1000C7',
},

});

export default Register;