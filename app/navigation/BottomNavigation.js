// import React from 'react';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import { createBottomTabNavigator } from 'react-navigation';
import Add from '../screens/Add';
import Categories from '../screens/Categories';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

// export default createBottomTabNavigator({
//       Home: {
//         screen: Home,
//         navigationOptions: {
//           tabBarTitle: "Home",
//           tabBarIcon: ({ focused }) => <FeatherIcon  name="home" color={focused ? "gray"  : "#fff"} size={22} />
//         },
//       },
//       Search: {
//         screen: Search,
//         navigationOptions: {
//           tabBarIcon: ({ focused }) => <FeatherIcon  name="search" color={focused ? "gray"  : "#fff"} size={22} />
//         },
//       },
//       Add: {
//         screen: Add,
//         navigationOptions: {
//           header: null,
//           tabBarIcon: ({ focused }) => <FeatherIcon  name="plus-circle" color={focused ? "gray"  : "#fff"} size={22} />
//         }
//       },
//       Categories: {
//         screen: Categories,
//         navigationOptions: {
//           tabBarIcon: ({ focused }) => <FeatherIcon  name="grid" color={focused ? "gray"  : "#fff"} size={22} />
//         }
//       },
//       Profile: {
//         screen: Profile,
//         navigationOptions: {
//           tabBarIcon: ({ focused }) => <FeatherIcon  name="user" color={focused ? "gray"  : "#fff"} size={22} />
//         }
//       },
// }, {
//     tabBarOptions: {
//       activeTintColor: 'red',
//       inactiveTintColor: 'grey',
//       style: {
//         backgroundColor: 'white',
//         borderTopWidth: 0,
//         shadowOffset: { width: 5, height: 3 },
//         shadowColor: 'black',
//         shadowOpacity: 0.5,
//         elevation: 5
//       }
//     }
//   })

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="rgb(236,35,118)"
      inactiveColor="#cbcbcb"
      labelStyle={{ fontSize: 10 }}
      barStyle={{ backgroundColor: '#ffffff', paddingBottom: 10, paddingTop: 10, }}
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
            <FeatherIcon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="plus-circle" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="grid" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="user" color={color} size={24} />
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
