import { StyleSheet, Text, View, TextInput, FlatList, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header } from '../components';
import { useNavigation } from '@react-navigation/native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Icons from '../components/Icons';
import { useAccountType } from '../utils/state';




const Airtime = () => {

    const { Mobile, setMobile, NetworkProvider, setNetworkProvider,  Amount, setAmount } = useAccountType();

    const navigation = useNavigation();

    const BackHandler = () => {
      navigation.goBack();
    };

    const networks = [
        {id: 1, name: 'glo', image: require('../assets/glo.png')},
        {id: 2, name: 'mtn', image: require('../assets/mtn.png')},
        {id: 3, name: 'airtel', image: require('../assets/airtel.png')},
        {id: 4, name: '9mobile', image: require('../assets/9mobile.png')},
    ]

    const body = {
        phone: Mobile,
        network: NetworkProvider,
        amount: Amount
    }

    const ContinueHandler = () => {
        console.log(body)
    }

    
  
  return (
    <View>

        <Header 
            title="Airtime"
            icon="chevron-left"
            onPress={BackHandler}
        />

        <View style={styles.phoneContainer}>
            <Text style={styles.phoneText}>Phone Number</Text>

            <TextInput
              style={styles.input}
              value={Mobile}
              onChangeText={text => setMobile(text)}
              keyboardType='numeric'
              placeholder='Enter your phone number'
            />
            <Icons name={"call-outline"} style={styles.callOutline} color={'#000'} />
        </View>

        <View style={styles.serviceProviders}>
            <Text style={styles.serviceText}>Service Provider</Text>

            <View style={styles.network}>
                {networks.map(service => (
                    <Pressable
                        key={service.id}
                        onPress={() => setNetworkProvider(service.name)}
                        style={[styles.eachNetwork, NetworkProvider === service.name && { borderWidth: 5, borderColor: '#000000'}]}
                    >
                        <Image source={service.image} style={styles.networkImage}/>
                    </Pressable>
                ))}
            </View>
            
        </View>

        <View style={styles.phoneContainer}>
            <Text style={styles.phoneText}>Amount</Text>

            <TextInput
              style={styles.input}
              value={Amount}
              onChangeText={text => setAmount(text)}
              keyboardType='numeric'
              placeholder='₦0.00'
            />
        </View>

        <TouchableOpacity
            style={styles.Continue}
            onPress={ContinueHandler}
        >
            <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>

    </View>

  )
}


const styles = StyleSheet.create({
    phoneContainer: {
        marginVertical: windowHeight * 0.04,
        marginHorizontal: windowWidth * 0.05
    },

    phoneText: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 16,
        marginBottom: windowHeight * 0.01
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

    callOutline: {
        position: 'absolute',
        right: windowWidth * 0.1,
        top: windowHeight * 0.045
    },

    network : {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
    },

    networkImage: {
        height: windowHeight * 0.1,
        width: windowWidth * 0.2,
    },

    serviceProviders: {
        marginVertical: windowHeight * 0.01,
        marginHorizontal: windowWidth * 0.05
    },

    serviceText: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 16,
        marginBottom: windowHeight * 0.02
    },

    Continue: {
        height: windowHeight  * 0.08,
        width: windowWidth * 0.85,
        backgroundColor: '#1000C7',
        marginHorizontal: windowWidth * 0.05,
        marginVertical: windowHeight * 0.05,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '600',
    }
});


export default Airtime;