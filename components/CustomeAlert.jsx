import React from 'react';
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';

function CustomeAlert({ visible, title, message, onClose, image }) {

  if (!visible) {
      return null;
  }

  return (
   <Modal 
        visible={visible} 
        transparent={true}
        animationType='slide'
        
        >
        <View style={styles.overlay}>
            <View style={styles.alertContainer}>
                <Image style={styles.worker_image}
                    source={image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                <TouchableOpacity onPress={onClose} style={styles.button}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
            </View>
      </View>
    </Modal>
  );
}

const styles = {
  overlay: {
    height: windowHeight * 0.4,
    width: windowWidth * 0.8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: windowHeight * 0.3,
    alignSelf: 'center',
  },
  alertContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FB6A0F'
  },
  message: {
    fontSize: 17,
    marginBottom: 20,
    color: '#FB6A0F',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    lineHeight: 30
  },
  button: {
    backgroundColor: '#1000C7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  worker_image: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.2,
  }
};
export default CustomeAlert