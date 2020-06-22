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
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  YouTubeScreen,
  ProfileScreen,
  SignIn,
  SignUp,
  BlockList,
} from '@screens';

function App() {
  return (
    <SafeAreaProvider>
      <BlockList />
    </SafeAreaProvider>
  );
}

export default App;
