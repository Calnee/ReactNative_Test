import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Screens/Login';
import InstaHome from '../Screens/InstaHomePage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Page2 from '../Screens/Page2';
import Page1 from '../Screens/Page1';
import Page3 from '../Screens/Page3';
import Page4 from '../Screens/Page4';

const StackNav = createNativeStackNavigator();
export function HomeStackMavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <StackNav.Screen
        name="InstaHome"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}

const BottomNav = createBottomTabNavigator();
export function BottomTabNavigator() {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen
        name="Home"
        component={InstaHome}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }}
      />

      <BottomNav.Screen
        name="Search"
        component={Page1}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="animation"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }}
      />

      <BottomNav.Screen
        name="User"
        component={Page2}
        options={{
          headerShown: false,
          tabBarLabel: 'User',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }}
      />

      <BottomNav.Screen
        name="Page3"
        component={Page3}
        options={{
          headerShown: false,
          tabBarLabel: 'Page3',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }}
      />

      <BottomNav.Screen
        name="Page4"
        component={Page4}
        options={{
          headerShown: false,
          tabBarLabel: 'page4',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </BottomNav.Navigator>
  );
}
