import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonComponent = () => {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default ButtonComponent;
