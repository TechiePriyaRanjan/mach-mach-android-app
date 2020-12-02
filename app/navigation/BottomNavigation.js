import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
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