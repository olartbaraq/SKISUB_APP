import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Icons from '../components/Icons';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;


function Services() {

  const navigation = useNavigation();

  const BackHandler = () => {
    navigation.goBack();
  }

  const iconData = [
    {id:1, name:'Airtime', icon_name:'call-outline'},
    {id:2, name:'Data', icon_name:'filter'},
    {id:3, name:'Cable TV', icon_name:'television'},
    {id:4, name:'Flight', icon_name:'airplane'},
    {id:5, name:'Electricity', icon_name:'lightbulb-variant'},
    {id:6, name:'Hotel', icon_name:'hotel'},
    {id:7, name:'Car Rental', icon_name:'car'}
  ]

  const ServiceHandler = (name) => {
    switch (name) {
      case 'Airtime':
        navigation.navigate('Airtime');
        break;
      case 'Data':
        navigation.navigate('Data Purchase');
        break;
      case 'Cable TV':
        navigation.navigate('Cable TV');
        break;
      case 'Flight':
        navigation.navigate('Flight');
        break;
      case 'Electricity':
        navigation.navigate('Electricity');
        break;
      case 'Hotel':
        navigation.navigate('Hotel');
        break;
      case 'Car Rental':
        navigation.navigate('Car Rental');
        break;

       // Add more cases as needed for other paymentType values
      default:
        break;
    }
  }




  return (
    <>
      <View style={styles.container}>
        <Header 
        title="Services"
        icon="chevron-left"
        onPress={BackHandler}
        />

        <View style={styles.services_container}>
          {iconData.map((service) => (
              <View
                key={service.id}
                style={styles.iconButton}
              >
                <TouchableOpacity style={styles.button}
                  onPress={() => ServiceHandler(service.name)}
                >
                  <Icons name={service.icon_name} color={'#1000C7'} size={30} />
                  <Text style={styles.icon_name}>{service.name}</Text>
                </TouchableOpacity> 
              </View>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FBF9F9',
    flex: 1
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
    justifyContent: 'space-between',
    height: windowHeight * 0.12,
    width: windowWidth * 0.27,
    borderRadius: 15,
    marginLeft: 30,
    alignItems: 'center',
    padding: 15,
    backgroundColor:"white",
  }
});

export default Services;