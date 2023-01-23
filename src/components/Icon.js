import React from 'react';
import Colors from '../constant/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FeatherIcons from 'react-native-vector-icons/Feather';

const defaultSetting = {
  color: Colors.gray,
  size: 23,
};
export const RIcon = props => {
  const {icon, onPress, onLongPress} = props;
  const _settings = {...defaultSetting, ...icon};
  const {name, color, size, style} = _settings;
  const [provider, iconName] = name?.split('/');

  if (provider === 'fa') {
    return (
      <FontAwesome
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        color={color}
        size={size}
        style={style}
      />
    );
  } else if (provider === 'fa5') {
    return (
      <FontAwesome5
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        color={color}
        size={size}
        style={style}
      />
    );
  } else if (provider === 'oct') {
    return (
      <Octicons
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        color={color}
        size={size}
        style={style}
      />
    );
  } else if (provider === 'sl') {
    return (
      <SimpleLineIcons
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        color={color}
        size={size}
        style={style}
      />
    );
  } else if (provider === 'ft') {
    return (
      <Fontisto
        onLongPress={onLongPress}
        onPress={onPress}
        size={size}
        style={style}
        name={iconName}
        color={color}
      />
    );
  } else if (provider === 'mc') {
    return (
      <MaterialCommunityIcons
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        size={size}
        style={style}
        color={color}
      />
    );
  } else if (provider === 'mt') {
    return (
      <MaterialIcons
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        color={color}
        size={size}
        style={style}
      />
    );
  } else if (provider === 'fh') {
    return (
      <FeatherIcons
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        color={color}
        size={size}
        style={style}
      />
    );
  } else if (provider === 'ad') {
    return (
      <AntDesign
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        color={color}
        size={size}
        style={style}
      />
    );
  } else if (provider === 'et') {
    return (
      <Entypo
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        color={color}
        size={size}
        style={style}
      />
    );
  } else if (provider === 'ii') {
    return (
      <Ionicons
        onLongPress={onLongPress}
        onPress={onPress}
        name={iconName}
        color={color}
        size={size}
        style={style}
      />
    );
  }
};
