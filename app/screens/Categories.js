import { Block } from 'galio-framework';
import React, { Component } from 'react';
import { Dimensions, ScrollView, SafeAreaView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Colors } from '../config';
import { HeaderHeight } from "../config/utils";
import { Images } from '../services';
import FeatherIcon from 'react-native-vector-icons/Feather';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://machmach.epictechworld.in/api/category?api_key=3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ',
})
const { width, height } = Dimensions.get('screen');
// const thumbMeasure = (width - 48 - 32) / 3;
const thumbMeasure = (width - 48) / 2;

export class Categories extends Component {
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
            <ScrollView showsVerticalScrollIndicator={false}>
              <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                {/* <Block row space="between" style={{ flexWrap: 'wrap' }} >
                {Images.Viewed.map((img, imgIndex) => (
                  <Image
                    source={{ uri: img }}
                    key={`viewed-${img}`}
                    resizeMode="cover"
                    style={styles.thumb}
                  />
                ))}
              </Block> */}

                <Block row space="between" style={{ flexWrap: 'wrap' }} >
                  {/* {categories.map((val, index) => {
                    console.log(val.category_id)
                    return (<View><Text>Hi</Text></View>)
                  })} */}
                  {categories.map((key, imgIndex) => (
                    <ImageBackground
                      source={{ uri: key.category_image }}
                      style={styles.thumb}
                      key={key.category_id}
                      imageStyle={styles.profileImage}
                    >
                      <Block flex style={styles.CategoriesTitle}>
                        <Text
                          style={{
                            // paddingBottom: 8,
                            color: Colors.ThemeColors.White,
                            fontSize: 20,
                            fontWeight: 'bold'
                          }}>{key.category_name}</Text>
                      </Block>
                    </ImageBackground>
                  ))}
                </Block>
              </Block>
            </ScrollView>
            {/* <Text>{categories}</Text> */}
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
  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center",
  //   height: 150,
  //   width: 150
  // },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    padding: 10,
    alignSelf: 'center',
    width: thumbMeasure,
    height: 120
  },
  CategoriesTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: thumbMeasure,
    height: thumbMeasure,
  },
  // profileTexts: {
  //   paddingHorizontal: theme.SIZES.BASE * 2,
  //   paddingVertical: theme.SIZES.BASE * 2,
  //   zIndex: 2
  // },
});
export default Categories;
