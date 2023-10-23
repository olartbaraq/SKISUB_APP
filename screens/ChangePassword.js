import React from 'react';
import { View, StyleSheet, Text ,TouchableOpacity, Pressable, TextInput, Alert} from 'react-native';
import Headercolored from '../components/Headercolored';
import Icons from '../components/Icons';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import { useAccountType } from '../utils/state';
import { useNavigation } from '@react-navigation/native';



function ChangePassword() {
    
    const navigation = useNavigation();

    const BackHandler = () => { 
        navigation.goBack();
    };

    const ChangePasswordHandler = () => {
        if(Password === confirmPassword) {
            Alert.alert("Password has been changed");
            navigation.navigate('Login');
            Alert.alert("Sign in with your new password");
        } else {
            Alert.alert('Please enter the same password');
        }
    };

    const { 
        Password, setPassword, hidePassword, 
        setHidePassword, hideConfirmPassword, setHideConfrimPassword,
        confirmPassword, setConfirmPassword
    } = useAccountType();

    const togglePasswordVisibility = () => {
        setHidePassword(prevValue => !prevValue);
    };
    
    const toggleConfirmPasswordVisibility = () => {
        setHideConfrimPassword(prevValue => !prevValue);
    };
    

  return (
    <>
        <Headercolored
            title="Change Password"
            onPress={BackHandler}
            icon="chevron-left"
            coloredHeader="Create New Password"
            body1="Please, enter a new password below"
            body2="different from the previous password."
        />
        <View style={styles.ChangePassword_input}>
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
            style={styles.chnagePasswordButton}
            onPress={ChangePasswordHandler}
        >
            <Text style={styles.ChangePasswordText}>Create New Password</Text>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    ChangePassword_input: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 30
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

    chnagePasswordButton: {
        height: windowHeight  * 0.08,
        width: windowWidth * 0.85,
        backgroundColor: '#1000C7',
        marginLeft: 30,
        marginTop: windowHeight * 0.35,
        marginBottom: 50,
        borderRadius: 20,
        textAlign: 'center'
    },
      
    ChangePasswordText: {
        color: '#fff',
        alignSelf: 'center',
        paddingVertical: 18,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
    },
   
});

export default ChangePassword;