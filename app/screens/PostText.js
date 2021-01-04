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

const PostText = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate('Home');
  };


  return (
    <Background>
      <Header>Text Post</Header>


      <TextInput
        label="Post"
        returnKeyType="done"
        multiline
        numberOfLines={5}
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
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
  },
});

export default memo(PostText);
