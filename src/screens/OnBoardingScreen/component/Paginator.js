import React from 'react';
import {Animated, View, StyleSheet, useWindowDimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../constant/Colors';

const Paginator = props => {
  const {data, scrollX} = props;
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [9, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(3),
  },
  dot: {
    height: hp(1),
    backgroundColor: Colors.accent,
    borderRadius: hp(1),
    marginHorizontal: hp(1),
  },
});

export default Paginator;
