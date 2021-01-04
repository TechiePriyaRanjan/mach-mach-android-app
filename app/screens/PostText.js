import { Picker } from '@react-native-picker/picker';
import React, { memo, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../config/theme';
import { postTextValidator } from '../config/validator';


const PostText = ({ navigation }) => {

  const [postText, setPostText] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const postTextError = postTextValidator(postText.value);
    const passwordError = passwordValidator(password.value);

    if (postTextError || passwordError) {
      setPostText({ ...postText, error: postTextError });
      setPassword({ ...password, error: passwordError });
      return;
    }


    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate('Home');
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
