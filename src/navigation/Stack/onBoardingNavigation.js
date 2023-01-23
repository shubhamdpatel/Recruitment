import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from '../../screens/OnBoardingScreen/OnBoardingScreen';

const Stack = createStackNavigator();
const OnBoardingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Boarding'} component={OnBoardingScreen} />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigation;
