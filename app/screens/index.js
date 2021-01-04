import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomNavigation from "../navigation/BottomNavigation";
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
import PostImage from './PostImage';
import PostText from './PostText';
import Profile from './Profile';
import Search from './Search';
import SignUpScreen from './SignUpScreen';
import SplashScreen from './SplashScreen';


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
    BottomNavigation,
    OTPVerificationScreen,
    PostText,
    PostImage,
    Profile,
    Search,
    SplashScreen,
    SignUpScreen
  },
  {
    initialRouteName: 'BottomNavigation',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
