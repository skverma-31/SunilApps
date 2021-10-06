/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import firebase from '../database/firebase';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const userLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to login!');
    } else {
      setIsLoading(true);
      firebase.default
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          if (!res.user.emailVerified) {
            Alert.alert('Error', 'Please verify your email address', [
              {
                text: 'Resend Verification Email',
                onPress: () => {
                  res.user
                    .sendEmailVerification()
                    .then(() => {
                      Alert.alert('Success', 'Please check your mail');
                    })
                    .catch(() => {
                      Alert.alert(
                        'Error',
                        'Error while sending verification mail.',
                      );
                    });
                },
              },
              {text: 'OK'},
            ]);
          }

          setIsLoading(false);

          setEmail('');
          setPassword('');
          seterrorMessage('');
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

      {errorMessage !== '' && (
        <View>
          <Text style={{color: 'red'}}>{errorMessage}</Text>
        </View>
      )}

      <FormButton buttonTitle="Login" onPress={userLogin} />
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => {
            if (!email || email.trim().length === 0) {
              Alert.alert('Error', 'Please enter email to proceed.');
              return;
            }

            firebase.default
              .auth()
              .sendPasswordResetEmail(email)
              .then(
                (res) => {
                  Alert.alert(
                    'Success',
                    'Please check your email for further steps.',
                  );
                  setEmail('');
                }
              )
              .catch(
                (error) => {
                  Alert.alert('Error', error.message);
                }
              );
          }}>
          <Text style={styles.forgotButton}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.forgotButton}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#B8E0D2',
  },

  forgotButton: {
    color: '#3740FE',
    marginTop: 2,
    marginBottom: 15,
  },
});

export default Login;
