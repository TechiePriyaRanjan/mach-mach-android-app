import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar, RefreshControl } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  componentWillUnmount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{
            height: this.startHeaderHeight,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd"
          }}>
            <View style={{
              flexDirection: 'row',
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: 'white',
              marginHorizontal: 15,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS == 'android' ? 20 : null,
              marginBottom: Platform.OS == 'android' ? 20 : null
            }}>
              <FeatherIcon name="search" size={20} style={{ marginRight: 10, textAlignVertical: 'center' }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search user..."
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

// const styles = StyleSheet.create({
//   searchWrapper: {
//     height: this.startHeaderHeight,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: "#dddddd"
//   },
// });

export default Search;
