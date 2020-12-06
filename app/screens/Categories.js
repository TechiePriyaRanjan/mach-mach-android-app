import { Block } from 'galio-framework';
import React, { Component } from 'react';
import { Dimensions, ScrollView, SafeAreaView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Colors } from '../config';
import { HeaderHeight } from "../config/utils";
import { Images } from '../services';
import FeatherIcon from 'react-native-vector-icons/Feather';
const { width, height } = Dimensions.get('screen');
// const thumbMeasure = (width - 48 - 32) / 3;
const thumbMeasure = (width - 48) / 2;
export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
                  {Images.Viewed.map((img, imgIndex) => (
                    <ImageBackground
                      source={{ uri: img }}
                      style={styles.thumb}
                      key={`viewed-${img}`}
                      imageStyle={styles.profileImage}
                    >
                      <Block flex style={styles.CategoriesTitle}>
                        <Text
                          style={{
                            // paddingBottom: 8,
                            color: Colors.ThemeColors.White,
                            fontSize: 20,
                            fontWeight: 'bold'
                          }}>Programming</Text>
                      </Block>
                    </ImageBackground>
                  ))}
                </Block>
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
export default Categories;
