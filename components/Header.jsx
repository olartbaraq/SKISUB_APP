import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Icons from './Icons';

function Header({title, onPress, icon}) {

  return (
    <View style={styles.header}>
        <TouchableOpacity 
        style={styles.border}
        onPress={onPress}
        >
            <Icons name={icon} />
        </TouchableOpacity>
        <View style={styles.textHeader}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    // header: {
    //     width: windowWidth,
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
    //     margin: 20
    // },

    // textHeader: {
    //     marginHorizontal: windowWidth * 0.1
    // },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#000',
        alignSelf: 'center',
        marginTop: windowHeight * -0.075

    },

    border: {
       borderWidth: 1,
       borderColor: '#E1E1E1',
       height: windowHeight * 0.07,
       width: windowWidth * 0.15,
       borderRadius: 20,
       alignItems: 'center',
       padding: 15,
       alignItems: 'center',
       margin: 20
    }
});

export default Header;