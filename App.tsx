import React from 'react';
//import {View, Text, TextInput} from 'react-native';
import InstaHomePage from './src/Screens/InstaHomePage';
import Login from './src/Screens/Login';
import { HomeStackMavigation } from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackMavigation />
    </NavigationContainer>
  );
};

export default App;
