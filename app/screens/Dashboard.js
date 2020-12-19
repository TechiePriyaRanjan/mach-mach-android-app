import React, { memo } from 'react';
// import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const Dashboard = ({ navigation }) => (
  <>
    {/* <Logo />
    <Header>Let’s start</Header> */}
    <Paragraph>
      Dashboard page coming soon!.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </>
);

export default memo(Dashboard);
