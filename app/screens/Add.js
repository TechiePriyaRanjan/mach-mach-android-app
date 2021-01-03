import { Block } from 'galio-framework';
import React, { memo, useRef } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Colors } from '../config';

// export default class Add extends Component {
const Add = ({ navigation }) => {

  // componentDidMount() {
  //   this.RBSheet.open()
  // }
  const refRBSheet = useRef();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        height={180}
        openDuration={250}
      // customStyles={{
      //   container: {
      //     justifyContent: "center",
      //     alignItems: "center"
      //   }
      // }}
      >
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 30, paddingTop: 20 }}>
          <Text>Create </Text>
        </View>
        <Block row space="around" style={{ flexWrap: 'wrap' }} >
          <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center' }}>
            <FeatherIcon onPress={() => {
              console.log('here'); navigation.navigate('Categories')
            }} name="video" size={20} style={{ backgroundColor: '#eee', padding: 20, marginBottom: 10, borderRadius: 50, color: Colors.ThemeColors.Primary }} />
            <Text>Video</Text>
          </View>
          <View onPress={() => navigation.navigate('Categories')} style={{ padding: 30, justifyContent: 'center', alignItems: 'center' }}>
            <FeatherIcon name="file-text" size={20} style={{ backgroundColor: '#eee', padding: 20, marginBottom: 10, borderRadius: 50, color: Colors.ThemeColors.Primary }} />
            <Text>Text</Text>
          </View>
        </Block>
      </RBSheet>
    </View>
  );
}

export default memo(Add);
