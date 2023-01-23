import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from '../Stack/HomeNavigation';
import ProfileNavigation from '../Stack/ProfileNavigation';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={'HomeScreen'} component={HomeNavigation} />
      <Tab.Screen name={'ProfileScreen'} component={ProfileNavigation} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
