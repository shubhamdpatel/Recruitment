import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/AuthScreen/LoginScreen';
import RegisterScreen from '../../screens/AuthScreen/RegisterScreen';
import OnBoardingScreen from '../../screens/OnBoardingScreen/OnBoardingScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {true && (
        <Stack.Screen name={'OnBoarding'} component={OnBoardingScreen} />
      )}
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Register'} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
