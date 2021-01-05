import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { emailValidator } from '../config/validator';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../config/theme';
import { Colors } from '../config';
import Button from '../components/Button';
// import { MdKeyboardBackspace } from "react-icons/md";
import { Picker } from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker';

const PostImage = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [singleFile, setSingleFile] = useState(null);

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      data.append('user_id', 3);
      data.append('category_id', 2);
      // Please change file upload URL
      let res = await fetch(
        'https://machmach.epictechworld.in/api/post-image?api_key=3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ',
        {
          method: 'post',
          body: data,
          data: {
            api_key: '3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ'
          },
          headers: {
            'Content-Type': 'multipart/form-data; '
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.images],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigation.navigate('LoginScreen');
  };

  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <Background>
      <Header>Post Image</Header>

      <Text style={styles.label}>
        Select Category
      </Text>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50, width: '100%', padding: 12,
          borderWidth: 1,
          borderColor: '#aeaeae',
          backgroundColor: '#FAF7F6',
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {/* <Picker.Item label="Select Category" value="" enabled={false} /> */}
        <Picker.Item label="Jokes" value="java" />
      </Picker>
      {/* {console.log(selectedValue)} */}
      <Text style={styles.label}>
        Image
      </Text>

      {/*Showing the data of selected Single file*/}
      {singleFile != null ? (
        <Text style={styles.textStyle}>
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'}
        </Text>
      ) : null}

      <Button icon={require('../assets/icons/image.png')} onPress={selectFile} style={styles.button}>
        Pick Image
      </Button>
      {/* <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity> */}
      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Submit
      </Button>

    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
    marginBottom: 10,
    marginTop: 10
  },
});

export default memo(PostImage);
