import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import AuthNavigation from './Stack/AuthNavigation';
import BottomTabNavigation from './BottomTab/BottomTabNavigation';

const RootNavigation = () => {
  const user = true;
  const isDarkMode = useColorScheme() === 'dark';
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(255, 255, 255)',
    },
  };
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : MyTheme}>
      {!user ? <BottomTabNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
