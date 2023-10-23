import React from 'react';
import RootStack from './navigations/RootStack';
import { View, StyleSheet } from 'react-native';


function App() {
  return (
    <View style={styles.body}>
    <RootStack />
    </View>
  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;