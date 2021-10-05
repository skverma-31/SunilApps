/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Title, Paragraph, Subheading} from 'react-native-paper';
const ExcelFormula = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{margin: 10}}>
        <Title>INDEX and MATCH in Excel</Title>
        <Subheading>A Better Alternative to VLOOKUP</Subheading>
        <Paragraph>=INDEX(B:H,MATCH(M1,B:B,FALSE),7)</Paragraph>
        <Text>
          {`\n CONDITIONEL FORMATING
=AND(COUNTIF($G$2:$I$2,"A")=0,COUNTIF($G$2:$I$2,"B")=0,COUNTIF($G$2:$I$2,"C")=0) 
=COUNTIF(X1,"*resolved*")+COUNTIF(X1,"*closed*") 
=OR(X1="Closed,"X1="Resolved")`}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ExcelFormula;

const styles = StyleSheet.create({
  _paragraph: {
    textAlign: 'justify',
    color: '#1B3D6C',
    margin: 25,
  },
});
