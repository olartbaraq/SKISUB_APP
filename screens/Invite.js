import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';

function Invite() {
    
  return (
    <>
        <View style={styles.body}>
          <Image 
          style={styles.image}
          source={require('../assets/invite.png')}
          />

          <View style={styles.refer}> 
            <Text style={styles.bold_text}>You haven’t invited your friends yet</Text>
            <Text style={styles.light_text}>Share your unique SkiSub code and get a 5 % bonus</Text>
            <Text style={styles.light_text}>on your first referral’s deposit. Let’s spread the word</Text>
            <Text style={styles.light_text}>and earn together!</Text>
          </View>

          <Text style={styles.unique_code}>Your unique referral code</Text>

          <View style={styles.code_body}>
            <Text style={styles.light_text}>skisub-firstname</Text>

            <TouchableOpacity 
            style={styles.referal_button}
            //onPress={copycodeHandler}
            >
              <Text style={styles.code}>Copy referral code</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
          //onPress={referralHandler}
          style={styles.referbutton}
          >
            <Text style={styles.refertext}>Refer a friend</Text>
          </TouchableOpacity>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    body: {
      backgroundColor: '#FBF9F9',
      flex: 1,
    },

    image: {
      alignSelf: 'center',
      marginBottom: windowHeight * 0.05,
      marginTop: windowHeight * 0.1
    },

    bold_text: {
      color: '#000',
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: windowHeight * 0.005,
      alignSelf: 'center',
    },

    light_text: {
      color: '#000',
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: '700',
      alignSelf: 'center',
    },

    unique_code: {
      marginLeft: 20,
      marginTop: windowHeight * 0.05,
      marginBottom: windowHeight * 0.01,
      color: '#000',
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: 'bold',
    },
    code_body:  {
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#1000C7',
      height: windowHeight * 0.13,
      width: windowWidth * 0.85,
      marginLeft: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    referal_button: {
      backgroundColor: '#785CC7',
      borderRadius: 30,
      alignItems: 'center',
      paddingVertical: windowHeight * 0.015,
      width: windowWidth * 0.37,
      height: windowHeight * 0.055
    },

    code: {
      color: '#fff',
      fontFamily: 'Roboto',
      fontSize: 14,
      fontWeight: '700',
      alignSelf: 'center',
    },

    refertext :{
      color: '#fff',
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: '700',
      alignSelf: 'center',
    },

    referbutton: {
      backgroundColor: '#1000C7',
      borderRadius: 20,
      alignItems: 'center',
      alignSelf: 'center',
      paddingVertical: windowHeight * 0.015,
      width: windowWidth * 0.85,
      height: windowHeight * 0.06,
      marginTop: windowHeight * 0.05
    }
});
export default Invite;