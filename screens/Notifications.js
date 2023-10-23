import React, { useState }from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Header from '../components/Header';
import Icons from '../components/Icons';
import { useNavigation } from '@react-navigation/native';



function Notifications() {

    const navigation = useNavigation();


   const [ toggleIconOff, setToggleIconOff ] = useState(true)
   const [ toggleIconOff2, setToggleIconOff2 ] = useState(true)

    const BackHandler = () => {
        navigation.goBack();
    };

    const toggleNotificationVisibility = () => {
        setToggleIconOff(prevValue => !prevValue);
    };
    
      const toggleNotificationVisibility2 = () => {
        setToggleIconOff2(prevValue => !prevValue);
    };

  return (
    <>
        <View style={styles.body}>
            <Header 
                title="Notifications"
                icon="chevron-left"
                onPress={BackHandler}
            />

            <View style={styles.settings_container}>
                <View style={styles.each_settings}>
                    <View style={styles.left_path}>
                        <View style={styles.icon_body}>
                            <Icons name={'notifications-blue'}/>
                        </View>

                        <Text style={styles.settings_name}>Push Notification</Text>
                    </View>

                    <View style={styles.right_path}>
                    <Pressable
                        onPress={toggleNotificationVisibility}
                        >
                            <Icons name={toggleIconOff ? "toggle-off" : "toggle-on"} />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.each_settings}>
                    <View style={styles.left_path}>
                        <View style={styles.icon_body}>
                            <Icons name={'notifications-blue'}/>
                        </View>

                        <Text style={styles.settings_name}>Email Notification</Text>
                    </View>

                    <View style={styles.right_path}>
                        <Pressable
                        onPress={toggleNotificationVisibility2}
                        >
                            <Icons name={toggleIconOff2 ? "toggle-off" : "toggle-on"} />
                        </Pressable>
                    </View>
                </View>
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

export default Notifications;