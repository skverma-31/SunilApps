/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SalaryCalc = () => {
  return (
    <View style={{backgroundColor: '#caf0f8'}} padding={10} margin={10}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="your name"
            maxLength={20}
            margin={5}
          />
          <TextInput
            style={styles.textInput}
            placeholder="mobile no"
            maxLength={20}
            margin={5}
          />
          <TextInput
            style={styles.textInput}
            placeholder="address"
            maxLength={20}
            margin={5}
          />
          <TextInput
            style={styles.textInput}
            placeholder="city"
            maxLength={20}
            margin={5}
          />
          <TextInput
            style={styles.textInput}
            placeholder="district"
            maxLength={20}
            margin={5}
          />
          <TextInput
            style={styles.textInput}
            placeholder="state"
            maxLength={20}
            margin={5}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Debit"
              maxLength={20}
              margin={5}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Credit"
              maxLength={20}
              margin={5}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Total"
              maxLength={20}
              margin={5}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 25,
  },

  inputContainer: {
    paddingTop: 15,
  },
  textInput: {
    borderColor: '#CCCCCC',
  },
  saveButton: {
    borderWidth: 1,
  },
  saveButtonText: {
    color: '#FFFFFF',
  },
});

export default SalaryCalc;
