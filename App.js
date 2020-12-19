import React from 'react';
import { StyleSheet, View } from 'react-native';
// import BottomNavigation from './app/navigation/BottomNavigation';
import App from './app/screens';

const Main = () => {
  return (
    <View style={styles.container}>
      <App />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default Main;
