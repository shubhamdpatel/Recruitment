import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {RIcon} from '../../../components/Icon';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useTheme} from '@react-navigation/native';
import Colors from '../../../constant/Colors';
const Skip = props => {
  const {navigation} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Login');
      }}
      style={styles.skipContainer}>
      <Text style={[styles.skip, {color: useTheme().colors.text}]}>Skip</Text>
      <RIcon
        icon={{
          name: 'oct/triangle-right',
          style: {marginLeft: 10},
          color: Colors.accent,
          size: 26,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = {
  skipContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  skip: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: wp(80),
  },
};
export default Skip;
