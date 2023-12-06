import { StyleSheet, Text, TextInput, FlatList, View } from 'react-native'
import React, {useState} from 'react'
import { useAccountType } from '../utils/state';
import DatePicker from 'react-native-date-picker';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import Icons from '../components/Icons';

const OneWay = () => {

    const [open, setOpen] = useState(false)
    const [stringDate, setStringdate] = useState("")

    const {  From, setFrom, To, setTo, date, setDate, Class, setClass, Passengers, setPassengers } = useAccountType();

    const Form = [
        {id: 1, name: "From", placeholder: "From Where", value: From, onChange: setFrom},
        {id: 2, name: "To", placeholder: "Enter Destination", value: To, onChange: setTo},
        //{id: 3, name: "Departure Date", placeholder: "Pick Date", value: Date, onChange: setDate}
    ]
    const Form2 = [
      {id: 1, name: "Select Class", placeholder: "Economy", icon: "chevron-small-down", value: Class, onChange: setClass},
      {id: 2, name: "Passengers", placeholder: "1 Adult", icon: "chevron-small-down", value: Passengers, onChange: setPassengers}
    ]

    const formatDate = (date) => {
      return date.toLocaleString(); // Adjust to the user's local timezone
    };

  return (
    <View>
      <FlatList 
        data={Form}
        renderItem={({item: form}) => (
            <>
              <Text style={styles.phoneText}>{form.name}</Text>
              <TextInput 
                style={styles.input}
                value={form.value}
                onChangeText={text => form.onChange(text)}
                keyboardType='default'
                placeholder={form.placeholder}
              />
            </>
        )}
        keyExtractor={form => form.id}
      />

      <Text style={styles.phoneText}>Departure Date</Text>
      <TextInput 
        style={styles.input}
        value={stringDate.split('G')[0]}
        //onChangeText={text => setDate(text)}
        keyboardType='default'
        placeholder="Pick Date"
        onPressIn={() => {
          setOpen(true);
        }}
      />
      {open && (
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(pickedDate) => {
            setOpen(false);
            setDate(pickedDate);
            setStringdate(formatDate(pickedDate))
            // Additional logic if needed
            //console.log(formatDate(pickedDate))
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      )}

      <FlatList 
        data={Form2}
        renderItem={({item: form}) => (
          <View style={styles.column}>
            <Text style={styles.phoneText}>{form.name}</Text>
            <TextInput 
              style={styles.input2}
              value={form.value}
              onChangeText={text => form.onChange(text)}
              keyboardType='default'
              placeholder={form.placeholder}
            />
          </View>
        )}
        keyExtractor={form => form.id}
        horizontal={true}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  phoneText: {
    color: '#000',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 16,
    margin: windowHeight * 0.02
  },

  input: {
    //marginVertical: windowHeight * 0.04,
    marginHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.9,
    height: 60,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000',
    backgroundColor: '#F2F2F2',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '700'
  },

  input2: {
    //marginVertical: windowHeight * 0.04,
    marginHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.4,
    height: 60,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000',
    backgroundColor: '#F2F2F2',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '700'
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});


export default OneWay;