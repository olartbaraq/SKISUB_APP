import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { Header } from '../components';
import { useNavigation } from '@react-navigation/native';
import { windowHeight, windowWidth } from '../utils/globalVariables';


const CarBook = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const BackHandler = () => {
      navigation.pop(1);
    };

    const { selectedCar } = route.params;

  return (
    <View style={styles.container}>
        <Header 
            title="Car Rentals"
            icon="chevron-left"
            onPress={BackHandler}
      />

        <View style={styles.OverviewContainer}>
            <Text style={styles.text}>Overview</Text>
            <Text style={styles.text_Big}>{selectedCar.model.name}</Text>
            <Text style={styles.text}>{selectedCar.year}</Text>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBF9F9',
        flex: 1,
    },

    text: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 16,
    },

    text_Big: {
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
    }

});



export default CarBook;