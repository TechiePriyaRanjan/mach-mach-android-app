import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Mach Mach</Header>

    {/* <Paragraph>
      Pics, Shayari &amp; Jokes. All in one place!!
    </Paragraph> */}
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('SignUpScreen')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
