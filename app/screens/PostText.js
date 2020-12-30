import { Block } from 'galio-framework';
import React, { Component } from 'react';
import { Dimensions, ScrollView, SafeAreaView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Colors } from '../config';
import { HeaderHeight } from "../config/utils";
import { Images } from '../services';
import FeatherIcon from 'react-native-vector-icons/Feather';
import axios from 'axios';
// import BackButton from '../components/BackButton';

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

              <Text style={{ fontSize: 22, fontWeight: 'bold', color: Colors.ThemeColors.Primary }}>
                {/* <BackButton goBack={() => navigation.navigate('Home')} /> */}
                Add Text
              </Text>
            </View>
          </View>
          <View style={{ padding: 10 }}>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
              <Block row space="between" style={{ flexWrap: 'wrap' }} >
                {categories.map((key, index) => {
                  return (
                    <View>
                      <Text key={key.category_id}>{key.category_name},</Text>
                    </View>)
                })}
              </Block>

            </Block>
            {/* </ScrollView> */}
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
  CategoriesTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default PostText;
