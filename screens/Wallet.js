import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, ScrollView, } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { windowHeight, windowWidth } from '../utils/globalVariables';




function Wallet() {

  const navigation = useNavigation();

  const BackHandler = () => {
    navigation.goBack();
  }

  const FundWalletHandler = () => {
   navigation.navigate("Fund Wallet");
  };

  const randomNumber = Math.random();
  //console.log(randomNumber);

  const amountPaid = [
    {id: 1, amount: '3000', date: '2017-04-25', time: '14:25'},
    {id: 2, amount: '4000', date: '2017-03-26', time: '01:25'},
    {id: 3, amount: '1000', date: '2017-04-05', time: '06:25'},
    {id: 4, amount: '2000', date: '2017-04-15', time: '19:25'},
    {id: 5, amount: '6000', date: '2017-04-23', time: '20:25'},
    {id: 6, amount: '8000', date: '2017-04-09', time: '10:25'},
    {id: 7, amount: '9000', date: '2017-04-13', time: '11:25'}
  ]

  return (
    <>
      <View style={styles.body}>
        <Header 
        title="Wallet"
        icon="chevron-left"
        onPress={BackHandler}
        />

        <View style={styles.main_cards}>

          <View style={styles.big_card}>
            <Text style={styles.main_balance}>Main Balance</Text>
            <Text style={styles.larger_text}>₦0.00</Text>
          </View>

            <TouchableOpacity
            onPress={FundWalletHandler}
            style={styles.small_card}
            >
              <Text style={styles.large_text}>Fund Wallet</Text>
            </TouchableOpacity>
        </View>

          <View style={styles.wallet_transactions}>
            <View style={styles.wallet_header}>
              <Text style={styles.trans_text}>Wallet Transactions</Text>
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
    </>
  );
};


const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FBF9F9',
    flex: 1,
  },

  main_cards: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20
  },

  big_card: {
    backgroundColor: '#1000C7',
    height: windowHeight * 0.25,
    width: windowWidth * 0.9,
    borderRadius: 20,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  small_card: {
    backgroundColor: '#1000C7',
    height: windowHeight * 0.05,
    width: windowWidth * 0.9,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    paddingVertical: 10
  },

  main_balance: {
    color: '#fff',
    fontFamily: 'SofiaSans',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: windowHeight * 0.03
  },

  larger_text: {
    color: '#fff',
    fontFamily: 'SofiaSans',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: windowHeight * 0.01,
    marginBottom: 15
  },

  large_text: {
    color: '#fff',
    fontFamily: 'SofiaSans',
    fontWeight: 'bold',
    fontSize: 15,
  },

  wallet_transactions: {
    height: windowHeight * 0.325,
    windowWidth: windowWidth
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
    margin: 35,
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
    fontSize: 16
  }

});

export default Wallet;