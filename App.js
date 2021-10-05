import 'react-native-gesture-handler';
// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#104f55',
        },
        headerTintColor: 'white',
        headerTitle: 'Verma Software',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 26,
        },
      }}>
      )
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
