import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../components';
import { useNavigation } from '@react-navigation/native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Icons from '../components/Icons';
import { useAccountType } from '../utils/state';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OneWay from './OneWay';
import RoundTrip from './RoundTrip';

const TopTab = createMaterialTopTabNavigator();


const Flight = () => {

  const navigation = useNavigation();

  const BackHandler = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.body}>
        <Header 
            title="Book Flight"
            icon="chevron-left"
            onPress={BackHandler}
        />
        
          <TopTab.Navigator
            initialRouteName="Flight"
            screenOptions={{
              tabBarGap: 10,
              tabBarLabelStyle: { fontSize: 17, fontFamily: 'Roboto', fontWeight: 'bold', color: '#000', textTransform: 'capitalize'},
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
            <TopTab.Screen name="OneWay" component={OneWay} />
            <TopTab.Screen name="Round Trip" component={RoundTrip} />
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


export default Flight;