import React from 'react';
import { View, StyleSheet, TextInput, Pressable } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Header from '../components/Header';
import Icons from '../components/Icons';
import { useNavigation } from '@react-navigation/native';
import { useAccountType } from '../utils/state';


function ResetPassword() {

    const navigation = useNavigation();

    const {
       Password, setPassword, 
        hidePassword, setHidePassword, confirmPassword, setConfirmPassword, hideConfirmPassword, setHideConfrimPassword,
        newPassword, SetNewPassword, hideNewPassword, setHideNewPassword
      } = useAccountType();

    const BackHandler = () => {
        navigation.goBack();
    };


    const togglePasswordVisibility = () => {
        setHidePassword(prevValue => !prevValue);
    };
    
      const toggleConfirmPasswordVisibility = () => {
        setHideConfrimPassword(prevValue => !prevValue);
    };

    const toggleNewPasswordVisibility = () => {
        setHideNewPassword(prevValue => !prevValue);
    };
    

  return (
   <>
    <View style={styles.body}>
        <Header 
            title="Reset Password"
            icon="chevron-left"
            onPress={BackHandler}
        />
        <View style={styles.passwordBody}>
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
                value={newPassword}
                onChangeText={password => SetNewPassword(password)}
                keyboardType='numbers-and-punctuation'
                placeholder='New Password'
                secureTextEntry={hideNewPassword}
                underlineColorAndroid="transparent"
                autoComplete='off'
                />

                <Pressable onPress={toggleNewPasswordVisibility}>
                <Icons name={hideNewPassword ? "eye-off" : "eye"} />
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
    </View>
   </>
  );
};


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FBF9F9',
    },

    passwordBody: {
        marginTop: windowHeight * 0.05,
    },

    input: {
        width: windowWidth * 0.85,
        height: 60,
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        color: '#000',
        backgroundColor: '#F2F2F2',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '700'
    },

});

export default ResetPassword;