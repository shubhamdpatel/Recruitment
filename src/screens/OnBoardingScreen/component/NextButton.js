import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {SvgUri, Circle} from 'react-native-svg';

const NextButton = () => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.container}>
      {/*<Svg width={size} height={size}>*/}
      {/*  <Circle*/}
      {/*    storke="#E6E7E8"*/}
      {/*    cx={center}*/}
      {/*    cy={center}*/}
      {/*    r={radius}*/}
      {/*    strokeWidth={strokeWidth}*/}
      {/*  />*/}
      {/*  <Circle*/}
      {/*    storke="#F4388F"*/}
      {/*    cx={center}*/}
      {/*    cy={center}*/}
      {/*    r={radius}*/}
      {/*    strokeWidth={strokeWidth}*/}
      {/*  />*/}
      {/*</Svg>*/}
      <Svg height="50%" width="50%">
        <Circle
          cx="50"
          cy="50"
          r="50"
          stroke="purple"
          strokeWidth=".5"
          fill="violet"
        />
      </Svg>
      <SvgUri
        width="100%"
        height="100%"
        uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NextButton;
