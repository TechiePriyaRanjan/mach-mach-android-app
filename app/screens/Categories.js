import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Categories</Text>
          </View>
          <View>
            {/* <FlatList
              data={gallery}
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableOpacity>
                      <Image source={item.image}/>
                    </TouchableOpacity>
                  </View>
                )
              }}
            /> */}
            {/* <View>
              <TouchableOpacity>
                <Image source={require("../assets/images/media2.jpg")} height={50} width={40} />
              </TouchableOpacity>
            </View> */}
          </View>
          <View>
            <Card>
              <ImageBackground style={{ paddingTop: 10 }} source={{ uri: 'https://picsum.photos/440' }} style={styles.image}>
                <Text style={styles.text}>Jokes</Text>
              </ImageBackground>
              <Card.Cover style={{ paddingTop: 10 }} source={{ uri: 'https://picsum.photos/400' }} />
              <Card.Cover style={{ paddingTop: 10 }} source={{ uri: 'https://picsum.photos/600' }} />
              <Card.Cover style={{ paddingTop: 10 }} source={{ uri: 'https://picsum.photos/500' }} />
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 150,
    width: 150
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});
export default Categories;
