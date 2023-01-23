import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import Colors from '../constant/Colors';

const Button = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.btnLabel}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: WP(28),
    height: HP(5),
    padding: HP(1.2),
    borderRadius: 5,
    marginTop: 30,
    alignSelf: 'flex-end',
  },
  btnLabel: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 16,
  },
});
export default Button;
