import { Block } from 'galio-framework';
import React, { memo, useRef } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Colors } from '../config';

// export default class Add extends Component {
const Add = ({ navigation }) => {

  const refRBSheet = useRef();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        height={180}
        openDuration={250}
      > */}
      {/* <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 30, paddingTop: 20 }}>
          <Text>Create </Text>
        </View> */}
      <Block row space="around" style={{ flexWrap: 'wrap' }} >
        <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center' }}>
          <FeatherIcon onPress={() => {
            navigation.navigate('PostImage')
          }} name="image" size={28} style={{ backgroundColor: '#eee', padding: 28, marginBottom: 10, borderRadius: 50, color: Colors.ThemeColors.Primary }} />
          <Text>Image</Text>
        </View>
        <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center' }}>
          <FeatherIcon onPress={() => {
            navigation.navigate('PostTextForm')
          }} name="file-text" size={28} style={{ backgroundColor: '#eee', padding: 28, marginBottom: 10, borderRadius: 50, color: Colors.ThemeColors.Primary }} />
          <Text>Text</Text>
        </View>
      </Block>
      {/* </RBSheet> */}
    </View>
  );
}

export default memo(Add);
