import { Picker } from '@react-native-picker/picker';
import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import { theme } from '../config/theme';
import { postTextValidator, categoryValidator } from '../config/validator';
import axios from 'axios';
const url = 'https://machmach.epictechworld.in/api/post-image?api_key=3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ';
const api_key = '3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ';

const PostImage = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [singleFile, setSingleFile] = useState(null);
  const [category, setCategory] = useState({ value: '', error: '' });
  const [selectedValue, setSelectedValue] = useState();
  const [state, setState] = useState([])

  useEffect(() => {
    fetch('https://machmach.epictechworld.in/api/category?api_key=3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ')
      .then(data => data.json())
      .then(json => setState(json.data))
  }, [])

  let Lists = state.map((myValue, myIndex) => {
    return (
      <Picker.Item label={myValue.category_name} value={myValue.category_id} key={myValue.category_id} />
    )
  });

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;

      const formData = new FormData();
      formData.append('post', fileToUpload);
      formData.append('user_id', 3);
      formData.append('category_id', 10);
      // formData.append('post', {
      //   uri: singleFile.uri,
      //   type: singleFile.type,
      //   name: singleFile.name
      // })

      axios({
        url: url,
        method: 'POST',
        data: formData,
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      }).then(function (response) {
        console.log("response :", response);
        alert('Upload Successful');
      }).catch(function (error) {
        console.log("error from image :", error);
        alert('Upload Failed');
      })
    }
    else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images]
      });
      console.log('res : ' + JSON.stringify(res));
      // Printing the log realted to the file
      setSingleFile(res); // Setting the state to show single file attributes
    } catch (err) {
      setSingleFile(null); // Handling any exception (If any)
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
    const postTextError = postTextValidator(postText.value);
    const categoryError = categoryValidator(category.value);

    alert('dhd')
    if (categoryError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigation.navigate('LoginScreen');
  };

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
        {Lists}
      </Picker>

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

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>


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
