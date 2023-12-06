import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import Icons from '../components/Icons';
import { useAccountType, customAlertState } from '../utils/state';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {

  const navigation = useNavigation();

  const randomNumber = Math.random();

  const { FirstName, setFirstName } = useAccountType();


  useEffect(() => {

    const fetchUserInfo = async () => {
      try {

        const firstNamePromise = await AsyncStorage.getItem('firstName');    
    
        const [firstNameValue] = await Promise.all([
          firstNamePromise]);
    
          setFirstName(firstNameValue);
    
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserInfo();
   
  }, [])
  
  const MoreHandler = () => {
    navigation.navigate('Services')
  };

  const AirtimeHandler = () => {
    navigation.navigate('Airtime')
  };

  const DataHandler = () => {
    navigation.navigate('Data Purchase')
  };

  const CableHandler = () => {
    navigation.navigate('Cable TV')
  };


  const iconData = [
    {id:1, name:'Airtime', icon_name:'call-outline', onPress: AirtimeHandler},
    {id:2, name:'Data', icon_name:'filter', onPress: DataHandler},
    {id:3, name:'Cable TV', icon_name:'television', onPress: CableHandler},
    {id:4, name:'More', icon_name:'more-horizontal', onPress: MoreHandler}
  ]

  const amountPaid = [
    {id: 1, amount: '3000', date: '2017-04-25', time: '14:25'},
    {id: 2, amount: '4000', date: '2017-03-26', time: '01:25'},
    {id: 3, amount: '1000', date: '2017-04-05', time: '06:25'},
    {id: 4, amount: '2000', date: '2017-04-15', time: '19:25'},
    {id: 5, amount: '6000', date: '2017-04-23', time: '20:25'},
    {id: 6, amount: '8000', date: '2017-04-09', time: '10:25'},
    {id: 7, amount: '9000', date: '2017-04-13', time: '11:25'}
  ]

  const notificationHandler = () => {
    navigation.navigate('Notification')
  };

  return (
    <>
    <View style={styles.body}>
      <View style={styles.screen}>
        <View style={styles.homepage_header}>
            <View style={styles.image_greeting}>
              <View style={styles.logoContainer}>
                <Image 
                source={require('../assets/photo.jpeg')} 
                style={styles.customer_logo}
                />
              </View>
                <View style={styles.greetings}>
                    <Text style={styles.text}>Hello, </Text>
                    <Text style={styles.text}>{FirstName}</Text>
                </View>
            </View>
            <Pressable
            style={styles.notification}
            onPress={notificationHandler}
            >
              <Icons name={'notifications'} size={30}/>
            </Pressable>
          </View>
            

        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={['#170251', '#170E80', '#170E80', '#170251']} style={styles.balanceContainer}>

          <View>
            <View style={styles.money_balance}>
              <Text style={styles.large_text_main}>Main Balance</Text>
              <Text style={styles.larger_text}>₦0.00</Text>
              {/* <Icons name={'download'} /> */}
              <Text style={styles.large_text}>Fund Wallet</Text>
            </View>
          </View>

        </LinearGradient>
      </View>

        <View style={styles.other_screen}>
          <View style={styles.quick_action_body}>
            <Text style={styles.quicktext}>Quick Action</Text>
              <View style={styles.buttonContainer}>
                {iconData.map((data) => (
                  <View
                    key={data.id}
                    style={styles.iconButton}
                    >
                      <Pressable style={styles.button}
                      onPress={data.onPress}
                      >
                        <Icons name={data.icon_name} color={'#1000C7'}/>
                        <Text style={styles.icon_name}>{data.name}</Text>
                      </Pressable> 
                  </View>
                ))}
              </View>
          </View>

          <View style={styles.wallet_transactions}>
            <View style={styles.wallet_header}>
              <Text style={styles.trans_text}>Recent Activity</Text>
              <Text style={styles.seeAll_text}>See all</Text>
            </View>

            <View style={styles.transactions}>
              {randomNumber >= 0.5 ? (
              <ScrollView>
                <View style={styles.recharge_container}>
                  {amountPaid.map((amountPaid) => (
                  <View key={amountPaid.id} style={styles.recharge}>
                    <View style={styles.word_amount}>
                      <Text style={styles.amount_black}>Wallet Funding - Bank Deposit </Text>
                      <Text style={styles.amount_blue}> ₦{amountPaid.amount}</Text>
                    </View>
                    <View style={styles.word_amount}>
                      <Text style={styles.date_recharged}>Date: {amountPaid.date} | {amountPaid.time} </Text>
                      <Text style={styles.amount_green}>Completed</Text>
                    </View>
                  </View>
                  ))}
                </View>
              </ScrollView>
              ) : (
              <View style={styles.recharge_container}>
                <View style={styles.circle}>
                  <View style={styles.circle2}>
                  
                  </View>
                </View>

                <View style={styles.text_empty}>
                  <Text style={styles.text_nothing}>
                    Looks like there’s no recent activity to show
                  </Text>
                  <Text style={styles.text_nothing}>
                    here. Get started by making a transaction.
                  </Text>
                </View>
              </View>
              )}
            </View>
          </View>
        </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  other_screen: {
    backgroundColor:'#FBF9F9',
  },

  quick_action_body: {
    marginBottom: windowHeight * -(0.01)
  },

  homepage_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: windowHeight * 0.03,
    marginRight: windowHeight * 0.03
  },

  screen: {
    backgroundColor: '#1000C7',
    height: windowHeight * 0.42
  },

  image_greeting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth * 0.27,

  },
  customer_logo: {
    height: windowHeight * 0.08,
    width: windowWidth * 0.16,
    borderRadius: 60,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 5
  },

  greetings: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontFamily: 'SofiaSans',
    fontWeight: 'bold',
    fontSize: 17
  },

  balanceContainer: {
    backgroundColor: "#fff",
    height: windowHeight * 0.25,
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    borderRadius: 15,
    padding: 10, 
  },
  money_balance: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: windowHeight * 0.25,
    alignItems: 'center',
  },

  large_text_main :{
    color: '#fff',
    fontFamily: 'SofiaSans',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: windowHeight * 0.02
  },

  large_text :{
    color: '#fff',
    fontFamily: 'SofiaSans',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: windowHeight * 0.015
  },

  larger_text: {
    color: '#fff',
    fontFamily: 'SofiaSans',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: windowHeight * 0.01,
    marginBottom: 15
    
  },
  quicktext:{
    marginTop: windowHeight * 0.035,
    color:'black',
    fontWeight:'bold',
    fontFamily: 'SofiaSans',
    marginLeft: windowHeight * 0.03

  },

  buttonContainer: {
    flexDirection: 'row',
    margin: windowHeight * 0.02,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: windowHeight * 0.1,
    width: windowWidth * 0.2,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 5,
    alignItems: 'center',
    padding: 15,
    backgroundColor:"white",
    
  },

  wallet_transactions: {
    height: windowHeight * 0.29,
    windowWidth: windowWidth,
  },

  wallet_header: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom:10,
    justifyContent: 'space-between'
  },

  trans_text: {
    color: '#000',
    fontFamily: 'SofiaSans',
    fontSize: 16,
    fontWeight: '700',
  },

  seeAll_text: {
    color: '#1000C7',
    fontFamily: 'SofiaSans',
    fontSize: 16,
    fontWeight: '700',
  },

  recharge_container: {
    height: windowHeight * 0.9,
  },

  recharge: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderWidth: 2,
    borderColor: '#1000C7',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 10,
    padding: 10,
  },

  word_amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  amount_black: {
    color: 'black',
    fontFamily: 'Sofia Sans',
  },

  amount_blue: {
    color: '#1000C7',
    marginLeft: windowWidth * 0.28
  },

  amount_green: {
    color: '#56C120',
    marginLeft: windowWidth * 0.31
  },

  date_recharged: {
    color: '#9DA8B6',
  },

  circle: {
    height: windowHeight * 0.15,
    width: windowWidth * 0.3,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#EEEEEE',
    alignSelf: 'center',
    marginTop: 15,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 5,
    padding: 13,
    backgroundColor: '#E2E2E2'
  },

  circle2: {
    height: windowHeight * 0.11,
    width: windowWidth * 0.22,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#fff',
    alignSelf: 'center',
    backgroundColor: '#fff'
  },

  text_empty: {
    alignItems: 'center'
  },

  text_nothing: {
    color: '#000',
    fontFamily: 'Roboto',
    fontWeight:'700',
    fontSize: 14
  }
  
  
});

export default Homepage;
