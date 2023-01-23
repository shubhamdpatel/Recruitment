import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../constant/Colors';

const InputText = props => {
  const {value, onChangeText, placeholder, inputStyle, rest} = props;
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, {...inputStyle}]}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: wp(90),
    height: hp(5),
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
});

export default InputText;
