import React, { useState }from 'react';
import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

function DeleteAccount() {

    const navigation = useNavigation();
 
    const BackHandler = () => {
        navigation.goBack();
    };

    const [modalVisible, setModalVisible] = useState(false);

    const deleteAccountHandler = () => {
        setModalVisible(prevValue => !prevValue)
    };

    const confirmDeleteAccount = () => {
        Alert.alert('We hate to see you go, come back when you finish trying other places')
    }
     
  return (
   <>
    <View style={styles.body}>
        <Header 
            title="Deactivate Account"
            icon="chevron-left"
            onPress={BackHandler}
        />

        <View style={styles.deleteAccount}>
            <Image 
                style={styles.image}
                source={require('../assets/Delete.png')}
            />

            <View style={styles.allText}>
                <Text style={styles.bold_text}>Deactivate Account</Text>

                <View>
                    <Text style={styles.light_text}>Are you sure you want to deactivate / delete your account?</Text>
                    <Text style={styles.light_text}>This acton cannot be undone.</Text>
                </View>
            </View>

            <TouchableOpacity
            onPress={deleteAccountHandler}
            style={styles.button}
            >
                <Text style={styles.button_text}>Deactivate Account</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Confirm Account Deletion</Text>
                        <Text style={styles.light_text}>By deleting your account you loose all</Text>
                        <Text style={styles.light_text}>your SkiSub Data and information</Text>
                        <Pressable
                            style={styles.deleteaccount}
                            onPress={confirmDeleteAccount}
                        >
                            <Text style={styles.textStyle}>Yes, Delete My Account</Text>
                        </Pressable>
                        <Pressable
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle2}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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

    deleteAccount: {
        marginTop: windowHeight * 0.05
    },

    image: {
        alignSelf: 'center',
        marginBottom: windowHeight * 0.05
    },

    allText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    bold_text: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.02
    },

    light_text: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 13,
        fontWeight: '500',
        alignSelf: 'center'
    },

    button: {
        marginTop: windowHeight * 0.3,
        backgroundColor: '#1000C7',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 17,
        width: windowWidth * 0.85,
        height: windowHeight * 0.07,
        borderRadius: 20
    },

    button_text: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '700',
    },

    textStyle: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '700',
    },

    textStyle2: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '700',
    },
    
    modalView: {
        marginTop: windowHeight * 0.3,
        backgroundColor: 'white',
        height: windowHeight * 0.4,
        borderRadius: 20,
        paddingVertical: 30,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    
    buttonClose: {
        marginTop: windowHeight * 0.03,
        backgroundColor: '#BCBCBC',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 17,
        width: windowWidth * 0.85,
        height: windowHeight * 0.07,
        borderRadius: 20
    },

    deleteaccount: {
        marginTop: windowHeight * 0.03,
        backgroundColor: '#C70000',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 17,
        width: windowWidth * 0.85,
        height: windowHeight * 0.07,
        borderRadius: 20
    },

    modalText: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.02,
        alignSelf: 'center'
    },

});

export default DeleteAccount;