import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import Icons from '../components/Icons';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';





function Profile() {

  const navigation = useNavigation();

  const BackHandler = () => {
      navigation.goBack();
  };

  const [modalVisible, setModalVisible] = useState(false);

  const uploadPhotoHandler = () => {
    Alert.alert('Photo Upload Successful')
  };

  const EditProfileHandler = () => {
    Alert.alert('Edit Profile Screen');
    navigation.navigate('Edit Profile');
  };

  const SettingsHandler = () => {
    Alert.alert('Settings Screen');
    navigation.navigate('Settings');
  };

  const ReferralHandler = () => {
    navigation.navigate('Referral');
    Alert.alert('Referral Screen')
  };

  const SupportHandler = () => {
    navigation.navigate('Support');
    Alert.alert('Support Screen')
  };

  const LegalHandler = () => {
    navigation.navigate('Legal');
    Alert.alert('Legal Screen')
  };

  const LogOutHandler = () => {
    setModalVisible(prevValue => !prevValue)
  };

const confirmLogOut = async () => {

  await AsyncStorage.clear();

  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        { name: 'Login' },
      ],
    })
  );

  //navigation.navigate('Login');
}

  const settingsData = [
    {id: 1, name: 'Personal Information', icon_name:'user', onPress: EditProfileHandler},
    {id: 2, name: 'Settings', icon_name:'settings', onPress: SettingsHandler},
    {id: 3, name: 'My Referral', icon_name:'users', onPress: ReferralHandler},
    {id: 4, name: 'Help & Support', icon_name:'question', onPress: SupportHandler},
    {id: 5, name: 'Legal', icon_name:'book-open', onPress: LegalHandler},
    {id: 6, name: 'Sign Out', icon_name:'sign-out', onPress: LogOutHandler}
  ]

  return (
    <>
        <View style={styles.body}>
          <Header 
            title="Profile"
            icon="chevron-left"
            onPress={BackHandler}
          />

          <View style={styles.imageBody}>
            <View style={styles.profile_photo}> 
            <Image 
                source={require('../assets/photo.jpeg')} 
                style={styles.customer_logo}
                />
            </View>

            <TouchableOpacity
            style={styles.photo_button}
            onPress={uploadPhotoHandler}
            >
              <View style={styles.upload_body}> 
                <Icons name={'upload'} />
                <Text style={styles.photo_upload}>Upload Photo</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.username}>
            <Text style={styles.name}>Mubaraq Akanbi</Text>
            <Text style={styles.email}>mubaraq.akanbi@ibedc.com</Text>
          </View>

          <Text style={styles.settings_text}>General Settings</Text>

          <View style={styles.settings_container}>
          {settingsData.map((setting) => (
            <Pressable
              onPress={setting.onPress}
              key={setting.id}
            >
              <View style={styles.each_settings}>
                <View style={styles.left_path}>
                  <View style={styles.icon_body}>
                    <Icons name={setting.icon_name}/>
                  </View>

                  <Text style={styles.settings_name}>{setting.name}</Text>
                </View>

                <View style={styles.right_path}>
                  <Icons name={'chevron-small-right'}/>
                </View>
              </View>
            </Pressable>
            ))}
          </View>

          {/* modal screen */}

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are you sure you want to sign out?</Text>
                    <Text style={styles.light_text}> Please confirm if you want to sign out of your</Text>
                    <Text style={styles.light_text}> account. This action will log you out</Text>
                   
                    <Pressable
                        style={styles.deleteaccount}
                        onPress={confirmLogOut}
                    >
                        <Text style={styles.textStyle}>Sign Me Out</Text>
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
    </>
  );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FBF9F9',
        flex: 1,
    },

    customer_logo: {
      height: windowHeight * 0.08,
      width: windowWidth * 0.16,
      borderRadius: 60,
      margin: 20
    },

    photo_button: {
      backgroundColor: '#1000C7',
      height: windowHeight * 0.07,
      width: windowWidth * 0.47,
      borderRadius: 30,
      alignItems: 'center',
      paddingVertical: 15
    },

    upload_body: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },

    photo_upload: {
      color: '#fff',
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: '700',
      marginLeft: 10
    },

    imageBody: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: windowWidth * 0.8,
    },

    username: {
      display: 'flex',
      flexDirection: 'column',
      height: windowHeight * 0.06,
      justifyContent: 'space-between',
      marginLeft: 20
    },

    name: {
      color: '#1D3A70',
      fontFamily: 'Roboto',
      fontSize: 20,
      fontWeight: '700',
    },

    email: {
      color: '#6B7280',
      fontFamily: 'Roboto',
      fontSize: 15,
      fontWeight: '400',
    },

    settings_text: {
      marginLeft: 20,
      marginTop: 20,
      color: '#000',
      fontFamily: 'Roboto',
      fontSize: 17,
      fontWeight: 'bold',
    },

    settings_container: {
      marginTop: windowHeight * 0.05
    },

    each_settings: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: windowWidth * 0.9,
      height: windowHeight * 0.085,
      marginLeft: 20
    },

    left_path: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    icon_body: {
      backgroundColor: '#EFEFEF',
      height: windowHeight * 0.07,
      width: windowWidth * 0.16,
      borderRadius: 20,
      alignItems: 'center',
      paddingVertical: 15,
      marginRight: 30,
    },

    settings_name: {
      color: '#1D3A70',
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: '400'
    },

    light_text: {
      color: '#000',
      fontFamily: 'Roboto',
      fontSize: 13,
      fontWeight: '500',
      alignSelf: 'center'
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

export default Profile;