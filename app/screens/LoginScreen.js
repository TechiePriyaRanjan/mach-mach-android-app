import React, { memo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';
import axios from 'axios';
import TextInput from '../components/TextInput';
import { theme } from '../config/theme';
import { passwordValidator, phoneValidator } from '../config/validator';
import { connect } from 'react-redux'
import { setProfileData } from '../../store/actions'

const url = 'https://machmach.epictechworld.in/api/user-login';

const LoginScreen = ({ navigation, setProfile }) => {
  const [phoneNumer, setPhoneNumber] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const phoneError = phoneValidator(phoneNumer.value);
    const passwordError = passwordValidator(password.value);

    if (phoneError || passwordError) {
      setPhoneNumber({ ...phoneNumer, error: phoneError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    // useEffect(() => {}, [])
    // console.log(typeof phoneNumer.value, typeof password.value)

    axios({
      method: 'post',
      url: url,
      data: {
        api_key: '3vR7oNeKydE93866i36lv3CuuelELH8hmmLKyQ',
        mobile_no: phoneNumer.value,
        password: password.value,
      }
    }).then(function (response) {
      console.log(response.data.data);
      setProfile(response.data.data);
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
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />
      <Logo />
      <Header>Welcome back.</Header>

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

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (value) => dispatch(setProfileData(value))
  }
}

export default connect(null, mapDispatchToProps)(memo(LoginScreen));
