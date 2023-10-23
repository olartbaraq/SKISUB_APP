import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';


const gap = 16;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

function HelpandSupport() {

    const navigation = useNavigation();

    const BackHandler = () => {
        navigation.goBack();
    };

    const supportData = [
        {id: 1, icon: require('../assets/instagram.png'), name: 'instagram', handle: '@skisub'},
        {id: 2, icon: require('../assets/whatsapp.png'), name: 'whatsapp', handle: '08023456789'},
        {id: 3, icon: require('../assets/telegram.png'), name: 'telegram', handle: '@skisub'},
    ]

  return (
    <>
        <View style={styles.body}>
            <Header 
                title="Help & Support"
                icon="chevron-left"
                onPress={BackHandler}
            />

            <Image 
                style={styles.image}
                source={require('../assets/contact.png')}
            />

            <View style={styles.all_text}> 
                <Text style={styles.bold_text}>How can we help you ?</Text>
                <Text style={styles.light_text}>At Ski Sub, we’re committed to providing you with</Text>
                <Text style={styles.light_text}>the best possible experience. If you have any</Text> 
                <Text style={styles.light_text}>questions, concerns, or issues. we’re here to help</Text>
            </View>

            <View style={styles.services_container}>
                {supportData.map((support) => (
                <View
                    key={support.id}
                    style={styles.iconButton}
                >
                    <TouchableOpacity style={styles.button}
                    //onPress={}
                    >
                        <Image 
                        style={styles.supportImage}
                        source={support.icon}
                        />
                        <Text style={styles.icon_name}>{support.name}</Text>
                        <Text style={styles.icon_name}>{support.handle}</Text>
                    </TouchableOpacity> 
              </View>
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

    image: {
        width: windowWidth * 0.35,
        height: windowHeight * 0.15,
        alignSelf: 'center',
        marginBottom: 20
    },

    bold_text: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.01,
        alignSelf: 'center'
    },

    light_text: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '600',
        alignSelf: 'center'
    },

    services_container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: -(gap / 2),
        marginHorizontal: -(gap / 1),
        marginTop: windowHeight * 0.04,
    },
    iconButton: {
        marginHorizontal: gap / 12,
        marginVertical: gap / 1,
        minWidth: childWidth,
        maxWidth: childWidth,
    
    },
    icon_name: {
        fontFamily:'Sofia Sans',
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: windowHeight * 0.2,
        width: windowWidth * 0.45,
        borderRadius: 15,
        marginLeft: 30,
        alignItems: 'center',
        padding: 15,
        backgroundColor:"#F2F1F1",
    },

    supportImage: {
        alignSelf: 'center',
        marginBottom: windowHeight * 0.01,
        marginTop: windowHeight * 0.03
    }

});

export default HelpandSupport;