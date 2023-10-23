import React, { useState }from 'react';
import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';



function Status() {
    
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
        marginTop: windowHeight * 0.2
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
});
export default Status;