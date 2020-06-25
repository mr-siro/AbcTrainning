/*
 *nhatnv@abcsoft.vn
 */

import React from 'react';
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  YouTubeScreen,
  ProfileScreen,
  SignIn,
  SignUp,
  BlockList,
  CustomComponent,
  FlightGray,
  FlightRed
} from '@screens';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <FlightRed />
    </SafeAreaProvider>
  );
}

export default App;
