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

const PostImage = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });

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
        <Picker.Item label="Java" value="java" />
      </Picker>
      {/* {console.log(selectedValue)} */}
      <Text style={styles.label}>
        Select Image
      </Text>
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
