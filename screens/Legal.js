import React from 'react';
import { View, StyleSheet, Text, Alert, Pressable } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Icons from '../components/Icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

function Legal() {

    const navigation = useNavigation();

    const BackHandler = () => {
        navigation.goBack();
    };

    const PrivacyHandler = () => {
        Alert.alert('Privacy Policy');
    };

    const TermsHandler = () => {
        Alert.alert('Terms and Condition Policy');
    };

    const LegalData = [
        {id: 1, name: 'Privacy Policy', icon_name:'book-open-black', onPress: PrivacyHandler},
        {id: 2, name: 'Terms and Condition', icon_name:'book-bookmark', onPress: TermsHandler},
    ]

  return (
    <>
        <View style={styles.body}>
            <Header 
                title="Legal"
                icon="chevron-left"
                onPress={BackHandler}
            />

            <View style={styles.settings_container}>
            {LegalData.map((setting) => (
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
        backgroundColor: '#FBF9F9',
        flex: 1,
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
    }
});

export default Legal;