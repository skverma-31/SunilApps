/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import firebase from '../database/firebase';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
//import SocialButton from "../components/SocialButton";

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const userLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to login!');
    }
    else if (email.trim()==="") {
      Alert.alert('Enter details to signup!');
    }
    else if (password.trim()==="") {
      Alert.alert('Enter details to signup!');
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

  if (isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

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
              .then(res => {
                Alert.alert(
                  'Success',
                  'Please check your email for further step.',
                );
                setEmail('');
              })
              .catch(error => {
                Alert.alert('Error', error.message);
              });
          }}>
          <Text style={styles.forgotButton}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.forgotButton}>Create Account</Text>
        </TouchableOpacity>
      </View>
      {/* {Platform.OS === "android" ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            //onPress={() => googleLogin()}
          />
        </View>
      ) : null} */}
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
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Login;
