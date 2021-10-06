/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Signup = props => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setretypePassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const registerUser = () => {
    //TODO: firebase register logic
    if (email === '' && password === '') {
      Alert.alert('Enter details to signup!');
    } else if (password !== retypePassword) {
      Alert.alert('Password does not match');
    } else {
      setIsLoading(true);
      firebase.default
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          res.user.updateProfile({
            displayName: displayName,
          });

          res.user
            .sendEmailVerification()
            .then(() => {
              Alert.alert(
                'Success',
                'Please check your email and activate your account',
                [
                  {
                    text: 'OK',
                    onPress: () => {
                      props.navigation.navigate('Login');
                    },
                  },
                ],
              );
              setIsLoading(false);
              setDisplayName('');
              setEmail('');
              setPassword('');
              seterrorMessage('');
            })
            .catch(error => {
              seterrorMessage(error.message);
              setIsLoading(false);
            });
        })
        .catch(error => {
          seterrorMessage(error.message);
          setIsLoading(false);
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Image
          style={{
            width: 150,
            height: 150,
          }}
          source={require('../assets/logo.png')}
        />
      </View>

      <FormInput
        placeholder="Name"
        iconType="user"
        value={displayName}
        onChangeText={val => setDisplayName(val)}
      />

      <FormInput
        placeholder="Email"
        iconType="mail"
        value={email}
        onChangeText={val => setEmail(val)}
      />

      <FormInput
        placeholder="Password"
        iconType="lock"
        value={password}
        onChangeText={val => setPassword(val)}
        maxLength={15}
        secureTextEntry={true}
      />

      <FormInput
        placeholder="Retype Password"
        iconType="lock"
        value={retypePassword}
        onChangeText={val => setretypePassword(val)}
        maxLength={15}
        secureTextEntry={true}
      />

      <FormButton buttonTitle="Signup" onPress={registerUser} />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.forgotButton}>
          Already Registered? Click here toLogin
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  forgotButton: {
    color: '#3740FE',
    marginTop: 2,
    marginBottom: 15,
  },
});

export default Signup;
