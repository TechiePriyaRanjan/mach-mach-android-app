import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {colors} from '../config/Colors';

export class SplashScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../assets/images/logo.png')} />
        </View>
        {/* <View style={styles.brandContainer}>
            <Text style={styles.brandText}>Mach Mach</Text>
        </View> */}
      </View>
    );
  }
}

export default SplashScreen;
export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
      },
      iconContainer: {
          display: 'flex',
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
      },
      brandContainer: {
          display: 'flex',
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
      },
      icon:{
          width: 256,
          height: 256
      },
      brandText: {
          'fontSize': 18,
          // color: colors.primary,
          fontFamily: 'Roboto, sans-serif'
      }
})
