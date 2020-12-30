import { Block } from 'galio-framework';
import React, { Component } from 'react';
import { Dimensions, ScrollView, SafeAreaView, StyleSheet, Image, View, ImageBackground } from "react-native";
import { Colors } from '../config';
import { HeaderHeight } from "../config/utils";
import { Images } from '../services';
import FeatherIcon from 'react-native-vector-icons/Feather';
const { width, height } = Dimensions.get('screen');
// const thumbMeasure = (width - 48 - 32) / 3;
const thumbMeasure = (width - 48) / 3;
import { GetLikedPostsByUserId } from "../components/GetLikedPostsByUserId";

export class LikedPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ padding: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Block style={{ paddingBottom: 100 }}>
                <GetLikedPostsByUserId />
              </Block>
            </ScrollView>
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
    height: thumbMeasure
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
export default LikedPost;
