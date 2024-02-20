import React, { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonComponent = () => {

  const [count, setCount] = useState<number>(0) ;

  const onPress = ()=> {
    setCount(prevCount => prevCount+1);
    console.log('The result:',count);
  }
  
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={(onPress)}>
        <Text style={styles.textColor}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 10,
    width: 310,
    marginLeft:20
  },
  textColor: {
    color:'white'
  }
});

export default ButtonComponent;
