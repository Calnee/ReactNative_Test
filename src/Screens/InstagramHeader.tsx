import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const InstaHeader = () => {
  return (
    <View style={styles.mainStyle}>
      <Image style={styles.tinyLogo} source={require('../assets/camera.png')} />
      <Text style={styles.headerText}>Instagram</Text>
      <Image style={styles.tinyLogo} source={require('../assets/send.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
});

export default InstaHeader;
