import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../../constant/Colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RIcon} from '../../../components/Icon';
const BoardingItem = props => {
  const {item} = props?.Data;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={styles.skip}>Skip</Text>
        <RIcon
          icon={{
            name: 'oct/triangle-right',
            style: {marginLeft: 10},
            color: Colors.accent,
            size: 26,
          }}
        />
      </TouchableOpacity>
      <Image source={item.image} style={styles.image} />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
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
    fontWeight: '300',
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    width: wp(90),
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default BoardingItem;
