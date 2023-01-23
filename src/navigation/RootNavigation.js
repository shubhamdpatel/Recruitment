import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthNavigation from './Stack/AuthNavigation';
import BottomTabNavigation from './BottomTab/BottomTabNavigation';
import OnBoardingNavigation from './Stack/onBoardingNavigation';

const RootNavigation = () => {
  const user = true;
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };
  // console.log('MyTheme===>', MyTheme);
  return (
    <NavigationContainer theme={MyTheme}>
      {/*{!user ? <BottomTabNavigation /> : <AuthNavigation />}*/}
      {user ? <OnBoardingNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
