/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
  Animated,
} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MyCard from '../../components/MyCard';

const WINDOW_WIDTH = Dimensions.get('window').width;
const Home = props => {
  // FLATLIST auto scorll starts.....
  const scrollX = new Animated.Value(0);
  const flatList = useRef();
  const infiniteScroll = dataList => {
    const numberOfData = dataList.length;
    let scrollValue = 0,
      scrolled = 0;
    setInterval(function () {
      scrolled++;
      if (scrolled < numberOfData) {
        scrollValue = scrollValue + WINDOW_WIDTH;
      } else {
        scrollValue = 0;
        scrolled = 0;
      }
      flatList?.current?.scrollToOffset({
        animated: true,
        offset: scrollValue,
      });
    }, 3000);
    // FLATLIST auto scorll ends.....
  };

  const items = [
    {
      id: '1',
      name: 'Envelope Prints',
      content: (
        <Text style={{fontSize: 18}}>
          It helps to Print Address on Envelops and also keep the records. It is
          capable for print on different size on envlope by custom setting.
          {'\n'}
          <Icon name="logo-youtube" size={40} color="red" />
          {'\n'}
          <TouchableOpacity
            onPress={() => Linking.openURL('https://youtu.be/s0awgeEn7Mc')}>
            <Text style={{fontSize: 14}}>
              Watch How to Use and Download Link
            </Text>
          </TouchableOpacity>
        </Text>
      ),
    },
    {
      id: '2',
      name: 'Cheque Prints',
      content: (
        <Text style={{fontSize: 18}}>
          It helps to Print Cheques of different Banks. You can also adjust the
          line spacing as per your requirment by custom setting.
          {'\n'}
          <Icon name="logo-youtube" size={40} color="red" />
          {'\n'}
          <TouchableOpacity
            onPress={() => Linking.openURL('https://youtu.be/G_AiY1cdCNQ')}>
            <Text style={{fontSize: 14}}>
              Watch How to Use and Download Link
            </Text>
          </TouchableOpacity>
        </Text>
      ),
    },
    {
      id: '3',
      name: 'Payroll Management',
      content: (
        <Text style={{fontSize: 18}}>
          It helps in making Salary and keeping history of each employee. You
          can eport the file in Excel format, Print Salary Slips and many more.
          {'\n'}
          <Icon name="logo-youtube" size={40} color="red" />
          {'\n'}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.youtube.com/watch?v=7bJfH4uRTAs')
            }>
            <Text style={{fontSize: 14}}>
              Watch How to Use and Download Link
            </Text>
          </TouchableOpacity>
        </Text>
      ),
    },
  ];

  useEffect(() => {
    infiniteScroll(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView style={(styles.container, {backgroundColor: '#9ec5ab'})}>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 5,
          //padding: 5,
          //backgroundColor: "white",
        }}>
        <MyCard
          title="About Developer"
          iconName="person-circle-outline"
          onPress={() => {
            props.navigation.navigate('About');
          }}
        />
        <MyCard
          title="Salary Calculator"
          iconName="calculator-outline"
          onPress={() => {
            props.navigation.navigate('Salary Calculator');
          }}
        />
        <MyCard
          title="Excel Formula Selection"
          iconName="document-text"
          onPress={() => {
            props.navigation.navigate('Excel Formula');
          }}
        />
        <MyCard
          title="Excel VBA Codes"
          iconName="code-slash-outline"
          onPress={() => {
            props.navigation.navigate('Excel VBA Codes');
          }}
        />
        <MyCard
          title="VB.Net Example"
          iconName="code-slash-outline"
          onPress={() => {
            props.navigation.navigate('VB.Net Codes');
          }}
        />
        <MyCard
          title="VB Script/Batch Codes"
          iconName="code-slash-outline"
          onPress={() => {
            props.navigation.navigate('VB Scripts/Batch Codes');
          }}
        />
      </View>
      <Text style={styles._headerStyle}>Our Latest Products</Text>
      <View style={{flex: 1}}>
        <FlatList
          ref={flatList}
          horizontal={true}
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'normal'}
          showsHorizontalScrollIndicator={false}
          data={items}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          renderItem={obj => {
            return (
              <View
                style={{
                  height: 200,
                  width: WINDOW_WIDTH - 20,
                  margin: 10,
                  backgroundColor: '#DFEEEA',
                  borderRadius: 10,
                  elevation: 5,
                  padding: 10,
                }}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 22}}>
                  <Icon name="grid-outline" size={25} /> {obj.item.name}
                </Text>
                <Text>{obj.item.content}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{marginTop: 5}}>
        <View
          style={{
            height: 180,
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 5,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/vCard.jpg')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  _headerStyle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#104f55',
  },
});
