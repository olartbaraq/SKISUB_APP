import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components';
import { useNavigation } from '@react-navigation/native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Icons from '../components/Icons';

const FundWallet = () => {

    const navigation = useNavigation();

    const BackHandler = () => {
      navigation.goBack();
    }

  return (
    <View>
       <Header 
        title="Wallet"
        icon="chevron-left"
        onPress={BackHandler}
        />

        <View style={styles.fundTips}>
            <View style={styles.iconContainer}>
                <Icons name={'notifications'} size={25}/>
            </View>

            <View style={styles.fundTipsTextContainer}>
                <Text style={styles.text}>Fund Tips</Text>
                <Text style={styles.text}>Transfer to any of the account</Text>
                <Text style={styles.text}>number below to fund your wallet</Text>
            </View>
        </View>

        <View style={styles.accountNumberContainer}>
            <Text style={styles.text}>Skisub</Text>
            <Text style={styles.text}>Skisub Bank PLC</Text>
            <Text style={styles.big_text}>0086543571</Text>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    fundTips: {
        backgroundColor: '#1000C7',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: windowWidth * 0.9,
        marginHorizontal: windowWidth * 0.05,
        marginVertical: windowHeight * 0.01,
        height: windowHeight * 0.12,
        paddingVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.05,
    },

    iconContainer: {
        height: windowHeight * 0.07,
        width: windowWidth * 0.14,
        backgroundColor: '#044AFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: windowWidth * 0.02,
    },

    text: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: 16
    },

    big_text: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: 50
    },

    accountNumberContainer: {
        backgroundColor: '#1000C7',
        borderRadius: 10,
        flexDirection: 'coloumn',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: windowWidth * 0.9,
        marginHorizontal: windowWidth * 0.05,
        marginVertical: windowHeight * 0.1,
        height: windowHeight * 0.2,
        paddingVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.05,
    }
});


export default FundWallet;