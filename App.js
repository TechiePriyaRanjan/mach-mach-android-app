import React from 'react';
import { StyleSheet, View } from 'react-native';
// import BottomNavigation from './app/navigation/BottomNavigation';
import App from './app/screens';
import { store } from './store'
import { Provider } from 'react-redux'

const Main = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <App />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default Main;
