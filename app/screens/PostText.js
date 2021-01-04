import axios from 'axios';
import { Block } from 'galio-framework';
import React, { Component } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Colors } from '../config';

const api = axios.create({
  baseURL: 'https://machmach.epictechworld.in/api/category?api_key=3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ',
})
const { width, height } = Dimensions.get('screen');
// const thumbMeasure = (width - 48 - 32) / 3;
const thumbMeasure = (width - 48) / 2;

export class PostText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesData: []
    };
  }
  componentDidMount() {
    this.getCategoriesData()
  }
  async getCategoriesData() {
    let response = await axios.get('https://machmach.epictechworld.in/api/category?api_key=3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ');
    this.setState({ categoriesData: response.data.data });
  }
  render() {
    let categories = this.state.categoriesData;
    // console.log('Rajat', categories);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{
            height: this.startHeaderHeight,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd",
            // marginBottom: 1
          }}>
            <View style={{ padding: 16 }}>
              {/* <FeatherIcon name="grid" color={Colors.ThemeColors.Primary} size={24} /> */}
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: Colors.ThemeColors.Primary }}>Categories</Text>
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <Block style={{ paddingBottom: 100 }}>
              <Text>JavScript!!</Text>


            </Block>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000"
  },
});
export default PostText;
