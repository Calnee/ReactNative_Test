import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ButtonComponent from '../component/Button';

const Login = () => {
  return (
    <View style={styles.mainStyle}>
      <Text style={styles.titleText}>Login</Text>

      <View style={styles.commonFeature}>
        <TextInput style={[styles.formField]} placeholder="email" />
        <TextInput style={[styles.formField, styles.marginTopp]} placeholder="password" />
      </View>

      <Text style={[styles.commonFeature, styles.forgotPswd]}>Forgot password?</Text>
      <ButtonComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    height: 830,
    padding: 20,
    backgroundColor:'#696969'
  },
  commonFeature: {
    padding: 20
  },
  marginTopp: {
    marginTop: 20
  },
  titleText: {
    fontSize: 30,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  },
  forgotPswd: {
    textAlign: 'center',
    color:'white'
  },
  formField: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor:'white'
  },
});

export default Login;
