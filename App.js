import React from 'react';
import { StyleSheet, View } from 'react-native';
import Search from './app/screens/Search';

const App = () => {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default App;
