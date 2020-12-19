import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Add from './Add';
import Categories from './Categories';
import Dashboard from './Dashboard';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import Home from './Home';
import HomeScreen from './HomeScreen';
import LikedPost from './LikedPost';
import LoginScreen from './LoginScreen';
import MyPost from './MyPost';
import OTPVerificationScreen from './OTPVerificationScreen';
import Profile from './Profile';
import Search from './Search';
import SplashScreen from './SplashScreen';
import SignUpScreen from './SignUpScreen';

const Router = createStackNavigator(
  {
    Add,
    Categories,
    Dashboard,
    ForgotPasswordScreen,
    Home,
    HomeScreen,
    LikedPost,
    LoginScreen,
    MyPost,
    OTPVerificationScreen,
    Profile,
    Search,
    SplashScreen,
    SignUpScreen
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);