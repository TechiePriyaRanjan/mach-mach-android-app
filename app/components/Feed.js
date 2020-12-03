import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, ScrollView, StatusBar } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Avatar from './Avatar';
import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	margin-top: 30px;
`
const Header = styled.View`
	height: 50px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 6px;
	padding: 0 11px;
`
const Row = styled.View`
	align-items: center;
	flex-direction: row;
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
	font-size: 12px;
	color: #222121;
	line-height: 16px;
	padding: 0 11px;
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

export class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={true}>
                    <Container>
                        <Header>
                            <Row>
                                <Avatar source={require("../assets/images/profile-pic.jpg")} />
                                <View style={{ paddingLeft: 10 }}>
                                    <User>Neha Sharma</User>
                                    <Row>
                                        <Time>Nov 17, 2020 at 2:05 PM</Time>
                                        {/* <FeatherIcon name="more-vertical" size={24} color="#52575D"></FeatherIcon> */}
                                        {/* <FeatherIcon name="globe" size={24} color="#52575D"></FeatherIcon> */}
                                    </Row>
                                    <Row><Text style={{ color: 'blue' }}>#FunnyJokes</Text></Row>
                                </View>
                            </Row>
                            <FeatherIcon name="more-vertical" size={24} color="#52575D"></FeatherIcon>
                        </Header>

                        <Photo source={require("../assets/images/media2.jpg")} />
                        <Footer>
                            <Separator />
                            <FooterMenu>
                                <Button>
                                    <FeatherIcon name="heart" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>23 Likes</Text>
                                </Button>
                                <Button>
                                    <FeatherIcon name="download" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>12 </Text>
                                </Button>
                                <Button>
                                    <FeatherIcon name="share-2" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>Share</Text>
                                </Button>
                            </FooterMenu>
                        </Footer>
                        <BottomDivider />
                    </Container>

                    <Container>
                        <Header>
                            <Row>
                                <Avatar source={require("../assets/images/profile-pic.jpg")} />
                                <View style={{ paddingLeft: 10 }}>
                                    <User>Neha Sharma</User>
                                    <Row>
                                        <Time>Nov 17, 2020 at 2:05 PM</Time>
                                    </Row>
                                    <Row><Text style={{ color: 'blue' }}>#Programming</Text></Row>
                                </View>
                            </Row>
                            <FeatherIcon name="more-vertical" size={24} color="#52575D"></FeatherIcon>
                        </Header>

                        <Post>
                            JavaScript is the world's most popular programming language.

                            JavaScript is the programming language of the Web.

                            JavaScript is easy to learn.

                            This tutorial will teach you JavaScript from basic to advanced.
				        </Post>

                        <Footer>
                            <Separator />
                            <FooterMenu>
                                <Button>
                                    <FeatherIcon name="heart" size={18} attrs={{ fill: 'tomato' }} style={{ marginRight: 10 }} />
                                    <Text>255 Likes</Text>
                                </Button>
                                {/* <Button>
                                    <FeatherIcon name="download" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>12 </Text>
                                </Button> */}
                                <Button>
                                    <FeatherIcon name="share-2" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>Share</Text>
                                </Button>
                            </FooterMenu>
                        </Footer>
                        <BottomDivider />
                    </Container>

                    <Container>
                        <Header>
                            <Row>
                                <Avatar source={require("../assets/images/profile-pic.jpg")} />
                                <View style={{ paddingLeft: 10 }}>
                                    <User>Neha Sharma</User>
                                    <Row>
                                        <Time>Nov 17, 2020 at 2:05 PM</Time>
                                        {/* <FeatherIcon name="more-vertical" size={24} color="#52575D"></FeatherIcon> */}
                                        {/* <FeatherIcon name="globe" size={24} color="#52575D"></FeatherIcon> */}
                                    </Row>
                                    <Row><Text style={{ color: 'blue' }}>#Real Estate</Text></Row>
                                </View>
                            </Row>
                            <FeatherIcon name="more-vertical" size={24} color="#52575D"></FeatherIcon>
                        </Header>

                        <Photo source={require("../assets/images/media1.jpg")} />
                        <Footer>
                            <Separator />
                            <FooterMenu>
                                <Button>
                                    <FeatherIcon name="heart" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>323 Likes</Text>
                                </Button>
                                <Button>
                                    <FeatherIcon name="download" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>132 </Text>
                                </Button>
                                <Button>
                                    <FeatherIcon name="share-2" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>Share</Text>
                                </Button>
                            </FooterMenu>
                        </Footer>
                        <BottomDivider />
                    </Container>

                    <Container>
                        <Header>
                            <Row>
                                <Avatar source={require("../assets/images/profile-pic.jpg")} />
                                <View style={{ paddingLeft: 10 }}>
                                    <User>Neha Sharma</User>
                                    <Row>
                                        <Time>Nov 17, 2020 at 2:05 PM</Time>
                                        {/* <FeatherIcon name="more-vertical" size={24} color="#52575D"></FeatherIcon> */}
                                        {/* <FeatherIcon name="globe" size={24} color="#52575D"></FeatherIcon> */}
                                    </Row>
                                    <Row><Text style={{ color: 'blue' }}>#Nature</Text></Row>
                                </View>
                            </Row>
                            <FeatherIcon name="more-vertical" size={24} color="#52575D"></FeatherIcon>
                        </Header>

                        <Post>
                            Crie na prática uma aplicação utilizando NextJS,
                            ReactJS, React Native e Strap Api.
				        </Post>
                        <Photo source={require("../assets/images/media3.jpg")} />
                        <Footer>
                            <Separator />
                            <FooterMenu>
                                <Button>
                                    <FeatherIcon name="heart" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>23 Likes</Text>
                                </Button>
                                <Button>
                                    <FeatherIcon name="download" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>12 </Text>
                                </Button>
                                <Button>
                                    <FeatherIcon name="share-2" size={18} color="#a1a1a1" style={{ marginRight: 10 }} />
                                    <Text>Share</Text>
                                </Button>
                            </FooterMenu>
                        </Footer>
                        <BottomDivider />
                    </Container>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Feed;
