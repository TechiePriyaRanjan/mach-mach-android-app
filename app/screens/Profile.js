import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Colors } from '../config';
import LikedPost from './LikedPost';
import MyPost from './MyPost';

const Tab = createMaterialTopTabNavigator();
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      profileImageURL: 'https://pbs.twimg.com/profile_images/428316729220276224/EdBZ2Kgp.jpeg'
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleBar}>
          <FeatherIcon name="arrow-left" size={24} color="#52575D"></FeatherIcon>
          <FeatherIcon name="more-vertical" size={24} color="#52575D"></FeatherIcon>
        </View>

        <View style={styles.imageWrapper}>
          <View>
            <View style={styles.dm}>
              <FeatherIcon name="edit" size={16} color="#fff"></FeatherIcon>
            </View>
            <Image source={{ uri: this.state.profileImageURL }} style={styles.profileImage}></Image>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 24, marginBottom: 10 }]}>Neha Sharma</Text>
            <Button mode="contained" color={Colors.ThemeColors.Primary}>
              {this.state.visible ? 'Edit Profile' : 'Follow'}
            </Button>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 20 }]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Likes</Text>
          </View>
          <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
            <Text style={[styles.text, { fontSize: 20 }]}>444</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 20 }]}>302</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>

        <Tab.Navigator
          tabBarOptions={{
            // activeTintColor: '#e91e63',
            labelStyle: {
              // fontSize: 12,
              textTransform: 'capitalize'
            },
            indicatorStyle: {
              backgroundColor: Colors.ThemeColors.Primary,
              // height: 0
            },
          }}
          style={{ paddingTop: 20 }}
        >
          <Tab.Screen name="My Post" component={MyPost} />
          <Tab.Screen name="Liked Post" component={LikedPost} />
        </Tab.Navigator>

      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
  },
  // image: {
  //   flex: 1,
  //   height: undefined,
  //   width: undefined
  // },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  profileImage: {
    width: 110,
    height: 110,
    padding: 1,
    borderRadius: 100,
    // overflow: "hidden"
  },
  imageWrapper: {
    display: 'flex',
    margin: 20,
    flexDirection: 'row',
    // width: 250,
    // height: 250,
    // shadowColor: "#5D3F6A",
    // shadowOffset: { height: 15 },
    // shadowRadius: 8,
    // shadowOpacity: 0.3
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 28,
    right: -10,
    padding: 0,
    height: 32,
    width: 32,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  // active: {
  //   backgroundColor: "#34FFB9",
  //   position: "absolute",
  //   bottom: 28,
  //   right: 1,
  //   padding: 0,
  //   height: 20,
  //   width: 20,
  //   borderRadius: 10
  // },
  // add: {
  //   backgroundColor: "#41444B",
  //   position: "absolute",
  //   bottom: 0,
  //   right: 0,
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  infoContainer: {
    padding: 10,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 0
  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
});

export default Profile;
