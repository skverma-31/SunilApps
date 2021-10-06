import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const WINDOW_WIDTH = Dimensions.get('window').width;
const MyCard = props => {
  const TouchableComponent = Platform.select({
    ios: TouchableOpacity,
    android:
      Platform.Version >= 28 ? TouchableNativeFeedback : TouchableOpacity,
  });

  return (
    <TouchableComponent onPress={props.onPress}>
      <View
        style={{
          ...styles._card,
          backgroundColor: props.backgroundColor || 'white',
        }}>
        {props.iconName !== undefined && (
          <Icon name={props.iconName} size={40} color="#104f55" />
        )}
        {props.title !== undefined && (
          <Text style={styles._text}>{props.title}</Text>
        )}
      </View>
    </TouchableComponent>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  _card: {
    height: WINDOW_WIDTH / 3.8,
    width: WINDOW_WIDTH / 3.8,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  _text: {textAlign: 'center'},
});
