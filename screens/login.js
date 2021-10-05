/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = () => {
    //TODO: firebase login logic
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
      <FormButton buttonTitle="Login" onPress={userLogin} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => {
            //TODO: forgot firebase logic
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
  },

  forgotButton: {
    color: '#3740FE',
    marginTop: 2,
    marginBottom: 15,
  },
});

export default Login;
