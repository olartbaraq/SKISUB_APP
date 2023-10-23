import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Icons from './Icons';


function Headercolored({ title, onPress, icon, coloredHeader, body1, body2 }) {

  return (
    <>
    <View style={styles.header}>
        <TouchableOpacity 
        style={styles.border}
        onPress={onPress}
        >
            <Icons name={icon} />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
    </View>

    <View style={styles.coloredBody}>
    <Text style={styles.coloredText}>{coloredHeader}</Text>

    <Text style={styles.body}>{body1}</Text>

    <Text style={styles.body2}>{body2}</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    header: {
        width: windowWidth * 0.75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#000',
    },

    border: {
       borderWidth: 1,
       borderColor: '#E1E1E1',
       height: windowHeight * 0.07,
       width: windowWidth * 0.15,
       borderRadius: 20,
       alignItems: 'center',
       padding: 15
    },

    coloredBody: {
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20
    },

    coloredText: {
        color: '#1D3A70',
        fontSize: 30,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: 10
    },

    body: {
        color: '#6B7280',
        fontSize: 18,
        fontFamily: 'Roboto',
        marginTop: 10
    },
    
    body2: {
        color: '#6B7280',
        fontSize: 18,
        fontFamily: 'Roboto',
        marginTop: 4
    },
});
export default Headercolored;