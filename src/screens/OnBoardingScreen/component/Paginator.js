import React from 'react';
import {
  Animated,
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../../constant/Colors';
import {RIcon} from '../../../components/Icon';

const Paginator = props => {
  const {data, scrollX, scrollTo} = props;
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.dotContainer}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [7, 20, 7],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
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

      <TouchableOpacity style={styles.rightArrow} onPress={scrollTo}>
        <RIcon
          icon={{
            name: 'mc/arrow-right-thin',
            size: 33,
            color: Colors.white,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    height: hp(3),
  },
  dot: {
    height: hp(0.8),
    backgroundColor: Colors.accent,
    borderRadius: hp(1),
    marginHorizontal: hp(0.3),
  },
  rightArrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
  },
});

export default Paginator;
