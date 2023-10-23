import React from 'react';
import { View, StyleSheet, Text ,TouchableOpacity, TextInput, Alert, BackHandler} from 'react-native';
import Headercolored from '../components/Headercolored';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import { useAccountType } from '../utils/state';
import { useNavigation } from '@react-navigation/native';


function ForgotPassword() {

    const navigation = useNavigation();

    const BackHandler = () => { 
        navigation.goBack();
    };

    const ForgotPasswordHandler = () => {
        if (Email) {
            Alert.alert('Olodo!!!', 'You go dey forget password!');
            navigation.navigate('ChangePassword');
        } else {
            Alert.alert('Ogbeni!!!', 'You no dey database joor')
        }
     
    };

    const { Email, setEmail } = useAccountType();

    
    return (
        <>
            <Headercolored
            title="Forgot Password"
            onPress={BackHandler}
            icon="chevron-left"
            coloredHeader="Forgot Password"
            body1="Don’t worry it happens. Please enter the"
            body2="email associated with your account."
            />
            <View style={styles.forgotBody}>

            
                <View style={styles.forgot_input}>
                    <TextInput
                    style={styles.input}
                    value={Email}
                    onChangeText={text => setEmail(text)}
                    keyboardType='email-address'
                    placeholder='Email'
                    />
                </View>

                <TouchableOpacity 
                style={styles.Forgot}
                onPress={ForgotPasswordHandler}
                >
                    <Text style={styles.forgotText}>Continue</Text>
                </TouchableOpacity>

             </View>
        </>
    );
};

const styles = StyleSheet.create({
    forgot_input: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 20
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

    Forgot: {
        height: windowHeight  * 0.08,
        width: windowWidth * 0.85,
        backgroundColor: '#1000C7',
        marginLeft: 5,
        marginTop: 30,
        borderRadius: 20,
        textAlign: 'center'
    },
      
    forgotText: {
        color: '#fff',
        alignSelf: 'center',
        paddingVertical: 18,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
    },

    forgotBody: {
        marginLeft: 30
    }
});


export default ForgotPassword;