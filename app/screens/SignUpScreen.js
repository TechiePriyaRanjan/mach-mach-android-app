import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../config/theme';
import axios from 'axios';
// import NetInfo from "@react-native-community/netinfo";
import {
  nameValidator,
  phoneValidator,
  passwordValidator,
  // emailValidator
} from '../config/validator';

const url = 'https://machmach.epictechworld.in/api/user-registration';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState({ value: '', error: '' });
  const [phoneNumer, setPhoneNumber] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  // const [email, setEmail] = useState({ value: '', error: '' });

  // const netInfo = useNetInfo();

  const _onSignUpPressed = () => {
    const nameError = nameValidator(fullName.value);
    const phoneError = phoneValidator(phoneNumer.value);
    const passwordError = passwordValidator(password.value);
    // const emailError = emailValidator(email.value);

    if (nameError || phoneError || passwordError) {
      setFullName({ ...fullName, error: nameError });
      setPhoneNumber({ ...phoneNumer, error: phoneError });
      setPassword({ ...password, error: passwordError });
      // setEmail({ ...email, error: emailError });
      return;
    }

    axios({
      method: 'post',
      url: url,
      data: {
        api_key: '3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ',
        name: fullName.value,
        mobile_no: phoneNumer.value,
        password: password.value,
        ip_address: '66.102. 15.255'
      }
    }).then(function (response) {
      console.log(response);
      navigation.navigate('BottomNavigation');
      // alert(response);
    })
      .catch(function (error) {
        console.log(error);
        // alert(error)
      });

    // navigation.navigate('BottomNavigation');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Home')} />

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Full Name"
        returnKeyType="next"
        value={fullName.value}
        onChangeText={text => setFullName({ value: text, error: '' })}
        error={!!fullName.error}
        errorText={fullName.error}
      />

      <TextInput
        label="Phone Number"
        returnKeyType="next"
        value={phoneNumer.value}
        onChangeText={text => setPhoneNumber({ value: text, error: '' })}
        error={!!phoneNumer.error}
        errorText={phoneNumer.error}
        textContentType="telephoneNumber"
        keyboardType="number-pad"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      {/* <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      /> */}
      {/* <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      /> */}

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(SignUpScreen);
