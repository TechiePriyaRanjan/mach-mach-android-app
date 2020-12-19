import React, { memo } from 'react';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';

const SplashScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Mach Mach</Header>

    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login App
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('SignUpScreen')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(SplashScreen);
