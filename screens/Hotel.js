import { StyleSheet, Text, View, TextInput, FlatList, Pressable, Image, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Header } from '../components';
import { useNavigation } from '@react-navigation/native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Swiper from 'react-native-swiper';
import Icons from '../components/Icons';
import axios from 'axios';



const gap = 16;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;



const Hotel = () => {

  const navigation = useNavigation();

  const BackHandler = () => {
    navigation.goBack();
  };

  const [HotelImages, setHotelImages] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const HotelInfo = [
    {id: 1, icon: 'lightbulb-variant', text: 'Electricity'},
    {id: 2, icon: 'water', text: 'Portable Water'},
    {id: 3, icon: 'air-conditioner', text: 'Air Conditioning'},
    {id: 4, icon: 'grass', text: 'Serene Environment'},
    {id: 5, icon: 'outdoor', text: 'Games and Outdoor'},
  ]

  useEffect(() => {

    const loadAllHotels = async () => {

      try {
       const hotelResponses = await axios.get('http://127.0.0.1:8000/hotelad/api/hotels/');
       //console.log(carResponses.data);
       setHotelImages(hotelResponses.data);
       setLoading(false);

      } catch (error) {
        console.error(error);
      }
    }
  
    loadAllHotels();

  }, [])

  const DisplayHotelDetailsHandler = (hotel) => {
    setSelectedHotel(hotel);
    setModalVisible(true);
  }
  
  const ContinueHandler = (selectedHotel) => {
    if (!loading && selectedHotel !== null) {
      navigation.push('Hotel Book', {selectedHotel : selectedHotel});
      setModalVisible(false);
    }
}


  return (
    <View style={styles.container}>

      <Header 
        title="Hotel"
        icon="chevron-left"
        onPress={BackHandler}
      />

      <Text style={styles.allCarsText}>All Hotels</Text>

      {/* <ScrollView> */}
        <View style={styles.carRentals_container}>
          {loading ? ( <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} size="large" color="#1000C7" />) : (
            (HotelImages.map((hotel) => (
              <View
                key={hotel.id}
                style={styles.iconButton}
              >
                <TouchableOpacity style={styles.button}
                  onPress={() => DisplayHotelDetailsHandler(hotel)}
                >
                  <FlatList 
                    data={hotel.images.slice(0,1)}
                    renderItem={({item: hotelImage}) => (
                      <Image 
                        source={{uri: hotelImage.image}}
                        style={{width: windowWidth * 0.3, height: windowHeight * 0.1,  resizeMode: 'contain'}}
                      />
                    )}
                    keyExtractor={hotelImage => hotelImage.id}
                  />
                  <Text style={styles.NamePriceText}>{hotel?.name}</Text>
                  <Text style={styles.NamePriceText}>₦ {hotel?.price_per_day}/day</Text>
                  <Text style={styles.NamePriceText}>{hotel?.location}</Text>
                </TouchableOpacity> 
              </View>
            )))
          )}
        
        </View>

      {/* </ScrollView> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        {selectedHotel && (
          
          <View style={styles.modalView}>
            <Pressable 
              style={styles.closeModal}
              onPress={() => setModalVisible(false)} 
            >
              <Icons  name="close" size={30} color={'#000'} style={styles.closeButton}/>
            </Pressable>
            <Swiper 
              style={styles.wrapper} 
              autoplay={true}
              autoplayTimeout={2.5}
              removeClippedSubviews={false}
              dotStyle={{
                backgroundColor: '#CCCCCC',
                width: 7,
                height: 7,
                borderRadius: 5,
                marginHorizontal: 0,
                }}
                activeDotStyle={{
                  width: 7,
                  height: 7,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  backgroundColor: '#000'
                }}
              paginationStyle={styles.pagination}
            > 
              <FlatList 
                data={selectedHotel?.images?.slice(0,1)}
                renderItem={({item: hotelImage}) => (
                  <Image 
                    source={{uri: hotelImage?.image}}
                    style={{width: windowWidth * 0.4, height: windowHeight * 0.2,  resizeMode: 'contain'}}
                  />
                )}
                keyExtractor={hotelImage => hotelImage.id}
               
              />

              <FlatList 
                data={selectedHotel?.images?.slice(1,2)}
                renderItem={({item: hotelImage}) => (
                  <Image 
                    source={{uri: hotelImage?.image}}
                    style={{width: windowWidth * 0.4, height: windowHeight * 0.2,  resizeMode: 'contain'}}
                  />
                )}
                keyExtractor={hotelImage => hotelImage.id}
               
              />

              <FlatList 
                data={selectedHotel?.images?.slice(2,3)}
                renderItem={({item: hotelImage}) => (
                  <Image 
                    source={{uri: hotelImage.image}}
                    style={{width: windowWidth * 0.4, height: windowHeight * 0.2,  resizeMode: 'contain'}}
                  />
                )}
                keyExtractor={hotelImage => hotelImage.id}
               
              />
            </Swiper>

            <View style={styles.carDetails}>

              <View style={styles.NamePrice}>
                <Text style={styles.NamePriceText}>{selectedHotel?.name}</Text>
                <Text style={styles.NamePriceText}>₦ {selectedHotel?.price_per_day}/day</Text>
                <Text style={styles.NamePriceText}>{selectedHotel?.location}</Text>
              </View>

              <View style={{borderWidth: 1, borderColor: '#000', width: windowWidth * 0.9, height: windowHeight * 0.001}}></View>

              <View style={styles.carInfo}>
                <Text style={styles.carInfoText}>Hotel Info</Text>

                <View style={styles.allInfo}>
                  {HotelInfo.map(info =>  (
                    <View key={info.id} style={[styles.iconButton, {flexDirection: 'row',}]}>
                      <Icons name={info.icon} size={35} color={'#000'}/>
                      <Text style={styles.infoText}>{info.text}</Text>
                    </View>
                  ))}

                </View>
                
              </View>

            </View>

            <TouchableOpacity
              style={styles.Continue}
              onPress={() => ContinueHandler(selectedHotel)}
            >
            <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>

          </View>
        )}
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create({

  wrapper: {
    marginTop: windowHeight * -0.05,
    marginHorizontal: windowWidth * 0.3,
    height: windowHeight * 0.21,
   
  },

  container: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },

  allCarsText: {
    color: '#000',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: windowWidth * 0.05
  },

  carRentals_container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 1),
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.1,
    
  },

  allInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 1),
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.01,
  },

  iconButton: {
    marginHorizontal: gap / 10,
    marginVertical: gap / 1,
    minWidth: childWidth,
    maxWidth: childWidth,

  },

  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: windowHeight * 0.2,
    width: windowWidth * 0.45,
    borderRadius: 15,
    marginLeft: 30,
    alignItems: 'center',
    padding: 15,
    backgroundColor:"#F2F1F1",
  },

  NamePriceText: {
    color: '#000',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: 17,
  },

  closeButton: {
    position: 'absolute',
    top: windowHeight * -0.02,
    left: windowWidth * -0.48
  },

  modalView: {
    marginTop: windowHeight * 0.1,
    backgroundColor: 'white',
    height: windowHeight * 0.86,
    borderRadius: 20,
    paddingVertical: 20,
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

  pagination: {
    position: 'absolute',
    bottom: windowHeight * 0.5,       
  },

  carDetails: {
    position: 'absolute',
    top: windowHeight * 0.25,
    //backgroundColor: '#000',
    height: windowHeight * 0.67,
    width: windowWidth * 0.9
  },

  NamePrice: {
    alignItems: 'flex-start',
    marginBottom: windowHeight * 0.01
  },

  carInfoText: {
    color: '#000',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: 17,
    marginTop: windowHeight * 0.02
  },

  Continue: {
    height: windowHeight  * 0.08,
    width: windowWidth * 0.85,
    backgroundColor: '#1000C7',
    marginHorizontal: windowWidth * 0.05,
    marginVertical: windowHeight * 0.05,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
},

text: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '600',
},

infoText : {
  marginTop: windowHeight * 0.01,
  marginLeft: windowWidth * 0.01
}

});

export default Hotel;