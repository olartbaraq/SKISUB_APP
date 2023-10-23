import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';



const Notification = ({ title, textBody , type }) => {
  return (
    <View>
        <AlertNotificationRoot>
            <View>
            {/* // dialog box
                <Button
                title={'dialog box'}
                onPress={() =>
                    Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'Congrats! this is dialog box success',
                    button: 'close',
                    })
                }
                /> */}
            // toast notification
                <Button
                    title={'toast notification'}
                    onPress={() =>
                        Toast.show({
                        type: {type}, //ALERT_TYPE.SUCCESS,
                        title: {title}, //'Success',
                        textBody: {textBody}, //'Congrats! this is toast notification success',
                        })
                }
                />
            </View>
        </AlertNotificationRoot>
    </View>
  )
}


const styles = StyleSheet.create({

})

export default Notification



