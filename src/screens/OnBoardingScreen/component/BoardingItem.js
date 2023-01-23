import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Colors from '../../../constant/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const BoardingItem = props => {
  const {item} = props?.Data;
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.description, {color: colors.text}]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skip: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.white,
    marginLeft: wp(80),
  },
  image: {
    flex: 0.7,
    width: wp(100),
    resizeMode: 'contain',
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
    color: Colors.accent,
    textAlign: 'center',
  },
  description: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    width: wp(90),
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default BoardingItem;
