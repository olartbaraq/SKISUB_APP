import React from 'react';
import { View, StyleSheet, Text, Pressable, Alert } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Header from '../components/Header';
import Icons from '../components/Icons';
import { useNavigation } from '@react-navigation/native';



function Settings() {

    const navigation = useNavigation();

    const BackHandler = () => {
        navigation.goBack();
    };

    const ResetPasswordHandler = () => {
        navigation.navigate('Reset Password');
        Alert.alert('Reset Password')
    };

    const NotificationsHandler = () => {
      navigation.navigate('Notifications settings');
      Alert.alert('Notifications')
    };

    const DeleteAccountHandler = () => {
      navigation.navigate('Delete Account');
        Alert.alert('Delete Account')
    };

    const settingsData = [
        {id: 1, name: 'Reset Password', icon_name:'user', onPress: ResetPasswordHandler},
        {id: 2, name: 'Notifications', icon_name:'settings', onPress: NotificationsHandler},
        {id: 3, name: 'Deactivate Account', icon_name:'users', onPress: DeleteAccountHandler},
    ]


  return (
   <>
    <View style={styles.body}>
        
        <Header 
            title="Settings"
            icon="chevron-left"
            onPress={BackHandler}
        />

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
    </View>
   </>
  );
};

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#FBF9F9',
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
        fontSize: 14,
        fontWeight: '400'
    }
});
export default Settings;