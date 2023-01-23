import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: !isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        StatusBarAnimation={'fade'}
      />
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;
