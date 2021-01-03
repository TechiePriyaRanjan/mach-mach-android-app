import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Add from '../screens/Add';
import Categories from '../screens/Categories';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="rgb(236,35,118)"
      inactiveColor="#cbcbcb"
      labelStyle={{ fontSize: 10 }}
      barStyle={{ backgroundColor: '#ffffff', paddingBottom: 0, paddingTop: 0, }}
      style={{ backgroundColor: 'pink' }}
      shifting={true}
      swipeEnabled={true}
      cardShadowEnabled={true}
      sceneAnimationEnabled={false}
      cardOverlayEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="home" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="search" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="plus-circle" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="grid" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="user" color={color} size={21} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
