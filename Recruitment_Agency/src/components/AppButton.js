import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Color from '../constant/Color';
import {windowWidth, windowHeight} from '../utils/Dimentions';

const AppButton = props => {
  const {style, buttonTitle, onPress, disabled} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.buttonContainer, style]}
      onPress={onPress}>
      <Text style={styles.button}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '35%',
    height: windowHeight / 17,
    backgroundColor: Color.primary,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.white,
  },
});

// import React from 'react';
// import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import {windowWidth, windowHeight} from '../utils/Dimentions';
// import {Button} from 'react-native-paper';

// const AppButton = ({buttonTitle, ...props}) => {
//   return (
//     <Button
//       style={styles.buttonContainer}
//       mode="contained"
//       uppercase={false}
//       {...props}>
//       <Text style={styles.btntext}>{buttonTitle}</Text>
//     </Button>
//   );
// };

// export default AppButton;

// const styles = StyleSheet.create({
//   buttonContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btntext: {
//     fontSize: Platform.OS === 'ios' ? 20 : 16,
//     height: '30%',
//   },
// });
