import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Icons from '../components/Icons';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';


function Notification() {

    const notificationData = [
        {id: 1, icon:'wallet-outline', title: 'Money Transfer', message:'You have successfully credited your wallet ₦1000', date: '26-07-2023'},
        {id: 2, icon:'wallet-outline', title: 'Money Transfer', message:'You have successfully credited your wallet ₦2500', date: '20-06-2023'},
        {id: 3, icon:'credit-card', title: 'Payment Notification', message:'Successfully paid!', date: '10-11-2022'},
        {id: 4, icon:'mobile-alt', title: 'Top Up', message:'Your top up was successful', date: '17-09-2022'},
        {id: 5, icon:'credit-card', title: 'Payment Notification', message:'Successfully paid!', date: '10-06-2022'}
    ]

    const navigation = useNavigation();

    const BackHandler = () => {
        navigation.goBack();
    }

  return (
    <>
        <View style={styles.body}>
            <Header 
                title="Notification"
                icon="chevron-left"
                onPress={BackHandler}
            />
            <Text style={styles.today}>Today</Text>

            <ScrollView>
                <View style={styles.notify}>
                    {notificationData.map((notification) => (
                        <View style={styles.whole} key={notification.id}>
                            <View style={styles.icons}>
                                <Icons name={notification.icon} />
                            </View>
                            <View style={styles.column}>
                                <View style={styles.row}> 
                                    <Text style={styles.title}>{notification.title}</Text>
                                    <Text style={styles.date}>{notification.date}</Text>
                                    
                                </View>
                                <View style={styles.msg_wrap}> 
                                    <Text style={styles.message}>{notification.message}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FBF9F9',
        flex: 1,
    },

    today: {
        marginLeft: 20,
        color: '#6B7280',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18
    },

    notify: {
        height: windowHeight,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    icons: {
        marginLeft: 20
    },

    whole: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: windowHeight * 0.13,
        width: windowWidth,
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: windowHeight * 0.07,
        width: windowWidth * 0.8
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth * 0.8,
        paddingRight: 25
    },
    title: {
        color: '#1D3A70',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20
    },
    message: {
        color: '#6B7280',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 16
    },
    msg_wrap: {
        width:  windowWidth * 0.8,
    }
});

export default Notification