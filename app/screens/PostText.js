import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { memo, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../config/theme';
import { categoryValidator, postTextValidator } from '../config/validator';


const url = 'https://machmach.epictechworld.in/api/post-text';

const PostText = ({ navigation }) => {

  const [postText, setPostText] = useState({ value: '', error: '' });
  const [category, setCategory] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const postTextError = postTextValidator(postText.value);
    const categoryError = categoryValidator(category.value);

    if (postTextError || categoryError) {
      setPostText({ ...postText, error: postTextError });
      setCategory({ ...category, error: categoryError });
      return;
    }

    axios({
      method: 'post',
      url: url,
      data: {
        api_key: '3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ',
        post: postText.value,
        category_id: 4,
        user_id: 4
      }
    }).then(function (response) {
      console.log(response);
      navigation.navigate('Home');
      alert(response);
    })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });

    // navigation.navigate('Home');
  };
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <Background>
      <Header>Post Text</Header>

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
        <Picker.Item label="Jokes" value="java" />
        <Picker.Item label="English Quotes" value="javas" />
      </Picker>

      <Text style={styles.label}>
        Enter Text
      </Text>
      <TextInput
        // label="Phone Number"
        returnKeyType="done"
        multiline
        numberOfLines={5}
        value={postText.value}
        onChangeText={text => setPostText({ value: text, error: '' })}
        error={!!postText.error}
        errorText={postText.error}
      />
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
    marginTop: 20
  },
});

export default memo(PostText);
