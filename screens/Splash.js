import React from 'react';
import { Image, StyleSheet, SafeAreaView, ImageBackground, Pressable, Text } from 'react-native';
import {windowHeight, windowWidth} from '../utils/globalVariables';


function Splash() {
  return (
    <SafeAreaView>
    <ImageBackground 
    source={require('../assets/ImageBackgroundski.png')}
    style={styles.splashImage}
    >
        <Pressable style={styles.proceed}>
            <Text style={styles.text}>Proceed</Text>
        </Pressable>
    </ImageBackground>
   </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    splashImage: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    proceed: {
        position: 'absolute',
        top: windowHeight * 0.45,
        left: windowWidth * 0.43,
    },
    text: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
    },
});

export default Splash;