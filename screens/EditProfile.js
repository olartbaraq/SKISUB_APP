import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,TextInput } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { useAccountType } from '../utils/state';



function EditProfile() {

    const { Email, setEmail, fullName, setFullName, Mobile, setMobile } = useAccountType();

    const navigation = useNavigation();

    const profileData = [
        {id: 1, title: 'Name', value: fullName, state: setFullName, keyboardType:'numbers-and-punctuation', placeholder: 'Oyebamiji Adebayo'}, 
        {id: 2, title: 'Mobile', value: Mobile, state: setMobile, keyboardType:'numeric', placeholder: '08034235678'},
        {id: 3,  title: 'Email', value: Email, state: setEmail, keyboardType:'email-address', placeholder: 'bamijibig247@gmail.com'},
    ]

    const BackHandler = () => {
        navigation.goBack();
    };

  return (
    <>
        <View style={styles.body}>
            <Header 
                title='Edit Profile'
                onPress={BackHandler}
                icon='chevron-left'
            />

            <View style={styles.inputBody}>
                {profileData.map((profile) => (
                    <View style={styles.Body} key={profile.id}>
                        <Text style={styles.title}>{profile.title}</Text>
                        <TextInput 
                            style={styles.input}
                            value={profile.value}
                            onChangeText={text => profile.state(text)}
                            keyboardType={profile.keyboardType}
                            placeholder= {profile.placeholder}
                            placeholderTextColor="#1D3A70" 
                        />
                    </View> 
                ))}
                
                <TouchableOpacity style={styles.updateButton}> 
                    <Text style={styles.Button}>Update</Text>
                </TouchableOpacity>
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

    inputBody: {
        height: windowHeight * 0.8,
        width: windowWidth,
        marginTop: windowHeight * 0.06
    },

    Body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }, 

    title: {
        color: '#6B7280',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginLeft: windowWidth * 0.07,
        marginBottom: windowHeight * 0.01
    },

    input: {
        width: windowWidth * 0.87,
        height: 60,
        borderRadius: 15,
        paddingHorizontal: windowWidth * 0.05,
        marginBottom: windowHeight * 0.03,
        backgroundColor: '#F2F2F2',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '900',
        color: '#1D3A70'
    },

    updateButton: {
        backgroundColor: '#1000C7',
        height: windowHeight * 0.07,
        width: windowWidth * 0.87,
        borderRadius: 15,
        marginTop: windowHeight * 0.05,
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 15
    },

    Button: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '800'
    }
});

export default EditProfile;