/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import firebase from '../../database/firebase';

import Home from './Home';
import About from './About';
import ExcelFormula from './ExcelFormula';
import ExcelVBA from './ExcelVBA';
import VbDotNet from './VbDotNet';
import Vbs_Batch from './Vbs_Batch';
import SalaryCalc from './SalaryCalc';

const Drawer = createDrawerNavigator();
const Dashboard = () => {
  const displayName = firebase.auth().currentUser.displayName;
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: 'white'}}
      drawerContent={props => {
        return (
          <>
            <View
              style={{
                height: 75,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderColor: 'red',
                backgroundColor: '#32746d',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 60, width: 60}}
                source={require('../../assets/logo.png')}
              />
              <Text style={{color: 'white', marginLeft: 10}}>
                <Text style={{fontSize: 18}}>Hello,</Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>{`\n${displayName}`}</Text>
              </Text>
            </View>

            <DrawerContentScrollView
              contentContainerStyle={{paddingTop: 10}}
              {...props}>
              <DrawerItemList
                {...props}
                inactiveBackgroundColor={'#B8E0D2'}
                activeBackgroundColor={'#32746d'}
                activeTintColor={'white'}
              />
            </DrawerContentScrollView>
          </>
        );
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: props => {
            return <Icon name="home-outline" {...props} />;
          },
        }}
      />
      <Drawer.Screen
        name="Excel Formula"
        component={ExcelFormula}
        options={{
          drawerIcon: props => {
            return <Icon name="reader-outline" {...props} />;
          },
        }}
      />
      <Drawer.Screen
        name="Excel VBA Codes"
        component={ExcelVBA}
        options={{
          drawerIcon: props => {
            return <Icon name="code-slash-outline" {...props} />;
          },
        }}
      />
      <Drawer.Screen
        name="VB.Net Codes"
        component={VbDotNet}
        options={{
          drawerIcon: props => {
            return <Icon name="code-slash-outline" {...props} />;
          },
        }}
      />
      <Drawer.Screen
        name="VB Scripts/Batch Codes"
        component={Vbs_Batch}
        options={{
          drawerIcon: props => {
            return <Icon name="code-slash-outline" {...props} />;
          },
        }}
      />

      <Drawer.Screen
        name="Salary Calculator"
        component={SalaryCalc}
        options={{
          drawerIcon: props => {
            return <Icon name="calculator-outline" {...props} />;
          },
        }}
      />

      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: props => {
            return <Icon name="person-outline" {...props} />;
          },
        }}
      />

      <Drawer.Screen
        name="Log Out"
        component={SalaryCalc}
        options={{
          drawerIcon: props => {
            return <Icon name="power-outline" {...props} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default Dashboard;
