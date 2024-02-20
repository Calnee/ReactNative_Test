import React from 'react';
import {View, Text, TextInput} from 'react-native';
import ButtonComponent from './src/component/Button';

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 700,
        padding: 20,
      }}>
      <Text>Login</Text>

      <View>
        <TextInput placeholder="email" />
        <TextInput placeholder="password" />
      </View>
      <Text>Forgot password</Text>
      <ButtonComponent />
    </View>
  );
};

export default ViewBoxesWithColorAndText;
