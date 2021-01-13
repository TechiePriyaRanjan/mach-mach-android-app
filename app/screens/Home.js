import React, { Component } from 'react';
import { Share, PermissionsAndroid, SafeAreaView, ScrollView, StyleSheet, View, Image, TouchableOpacity, Dimensions, RefreshControl } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import styled from 'styled-components/native';
import Avatar from '../components/Avatar';
import ReadMore from 'react-native-read-more-text';
import { connect } from 'react-redux'
import { setProfileData } from '../../store/actions'
import Snackbar from 'react-native-snackbar';
import Clipboard from '@react-native-community/clipboard';
import RNFetchBlob from 'rn-fetch-blob';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      refreshing: false,
      // share: 'key.post',
      defaultLikeBtnColor: '#bbb',
      likecBtnColor: '#FF0000'
    };
  }
  componentDidMount() {
    this.getCategoriesData()
  }
  async getCategoriesData() {
    let response = await axios.get('https://machmach.epictechworld.in/api/post?api_key=3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ');
    this.setState({ postData: response.data.data });
    console.log(response.data.data);
  }
  _handleTextReady = () => {
    console.log('ready!');
  }
  _refreshListView() {
    //Start Rendering Spinner
    this.setState({ refreshing: true }),
      this.getCategoriesData()
    //Updating the dataSource with new data

    this.setState({ refreshing: false }) //Stop Rendering Spinner
  }

  onShare = async (value) => {
    try {
      const result = await Share.share({
        message:
          value.post,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // _downloadImage = async (value) => {
  //   try {
  //     const result = await Share.share({
  //       message:
  //         value.post,
  //     });

  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  checkPermission = async (value) => {

    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
      this.downloadImage(value);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'App needs access to your storage to download Photos',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          this.downloadImage(value);
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  downloadImage = (value) => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = value.post;
    // Getting the extention of the file
    let ext = this.getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        // alert('Image Downloaded Successfully.');
        Snackbar.show({
          text: 'Image Downloaded Successfully!',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#5cb85c'
        });
      });
  };
  getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ?
      /[^.]+$/.exec(filename) : undefined;
  };
  _copyText = async (value) => {
    Clipboard.setString(value.post)
    Snackbar.show({
      text: 'Text Copied to Clipboard!',
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#5cb85c'
    });
  }
  likePost = () => {
    this.setState({ defaultLikeBtnColor: this.state.likecBtnColor });
  }
  render() {
    let allPosts = this.state.postData;
    const { profile } = this.props;
    console.log(profile, 'gs')
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this._refreshListView()} />
          }
        >

          {
            allPosts.map((key, index) => {
              return (
                <Container key={key.post_id}>
                  <Header>
                    <Row>
                      <Image
                        style={styles.tinyLogo}
                        source={{ uri: key.profile_pic }}
                      />
                      <View style={{ paddingLeft: 10 }}>
                        <User>{key.posted_by}</User>
                        <Row>
                          <Time>{key.posted_on}</Time>
                        </Row>
                        <Row><Text style={{ color: 'blue' }}>{key.category}</Text></Row>
                      </View>
                    </Row>
                    <FeatherIcon name="more-vertical" size={24} color="#52575D"></FeatherIcon>
                  </Header>

                  {key.type === "Image"
                    ?
                    <Image
                      style={styles.postImage}
                      source={{ uri: key.post }}
                      resizeMode="contain"
                    />
                    :
                    <View style={styles.postText}>
                      <ReadMore
                        numberOfLines={4}
                      // onReady={this._handleTextReady}
                      >
                        {key.post}
                      </ReadMore>
                    </View>
                  }
                  <Footer>
                    <Separator />
                    <FooterMenu>
                      <Button onPress={this.likePost}>
                        <FeatherIcon name="heart" size={18} attrs={{ fill: 'tomato' }} style={{ marginRight: 10, color: this.state.defaultLikeBtnColor }} />
                        <Text>{key.total_like} Likes</Text>
                      </Button>
                      {
                        key.type === "Image"
                          ?
                          <Button onPress={() => this.checkPermission(key)}>
                            <FeatherIcon name="download" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                            <Text>{key.total_download} </Text>
                          </Button>
                          :
                          <Button onPress={() => this._copyText(key)}>
                            <FeatherIcon name="copy" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                            <Text>Copy</Text>
                          </Button>
                      }
                      {/* <Button> */}
                      <TouchableOpacity onPress={() => this.onShare(key)}>
                        <FeatherIcon name="share-2" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                        <Text>Share</Text>
                      </TouchableOpacity>
                      {/* </Button> */}
                    </FooterMenu>
                  </Footer>
                  <BottomDivider />
                </Container>
              )
            })
          }
        </ScrollView>
      </SafeAreaView>
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
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 4
  },
  postImage: {
    marginTop: 2,
    // width: '100%',
    // height: 300,
    height: imageHeight,
    width: imageWidth,
  },
  postText: {
    fontSize: 14,
    color: '#222121',
    lineHeight: 18,
    padding: 12,
    marginTop: 5
  }
});

const Container = styled.View`
	flex: 1;
	margin-top: 10px;
`
const Header = styled.View`
	height: 50px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 6px;
	padding: 0 11px;
  ${'' /* border: 1px solid red; */}
`
const Row = styled.View`
	align-items: center;
	flex-direction: row;
  ${'' /* border: 1px red solid; */}
`
const User = styled.Text`
	font-size: 12px;
	font-weight: bold;
	color: #222121;
`
const Time = styled.Text`
	font-size: 9px;
	color: #747476;
`
const Post = styled.Text`
	font-size: 14px;
	color: #222121;
	line-height: 18px;
	padding: 12px;
  margin-top: 5px;
  ${'' /* border: 1px solid red; */}
`
const Photo = styled.Image`
	margin-top: 9px;
	width: 100%;
	height: 300px;
`
const Footer = styled.View`
	padding: 0 11px;
`
const FooterCount = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const IconCount = styled.View`
	background: #1878f3;
	width: 20px;
	height: 20px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	margin-right: 6px;
`
const TextCount = styled.Text`
	font-size: 11px;
	color: #424040;
`
const Separator = styled.View`
	width: 100%;
	height: 1px;
	background: #f9f9f9;
`
const FooterMenu = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const Button = styled.TouchableOpacity`
	flex-direction: row;
`
const Icon = styled.View`
	margin-right: 6px;
`
const Text = styled.Text`
	font-size: 12px;
	color: #424040;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`
const mapStateToProps = (state) => {
  return {
    profile: state.profiled

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (value) => dispatch(setProfileData(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home
