import React, { useState }from 'react';
import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Status from './Status';
import Invite from './Invite';

const TopTab = createMaterialTopTabNavigator();

function Referral() {

  const navigation = useNavigation();
 
  const BackHandler = () => {
      navigation.goBack();
  };


  return (
    <>
      <View style={styles.body}>
        <Header 
            title="Referral"
            icon="chevron-left"
            onPress={BackHandler}
        />
        
          <TopTab.Navigator
            initialRouteName="Referral"
            screenOptions={{
              tabBarGap: 10,
              tabBarLabelStyle: { fontSize: 13, fontFamily: 'Roboto', fontWeight: 'bold', color: '#000', textTransform: 'capitalize'},
              tabBarItemStyle: { width: windowWidth * 0.5, height: 40 },
              tabBarStyle: { backgroundColor: 'transparent',
                              borderTopWidth: 0,
                              elevation: 0,
                              borderBottomColor: '#000'
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#1000C7',
            },
            tabBarIndicatorContainerStyle: {

            }
            }}
          >
            <TopTab.Screen name="Invite" component={Invite} />
            <TopTab.Screen name="Status" component={Status} />
          </TopTab.Navigator>
       

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },
});
export default Referral;