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
import {SignIn} from 'src/views/screens/auth/signin';
import {SignUp} from 'src/views/screens/auth/signup';
import {ProfileScreen} from 'src/views/screens/app/account/profile';
import {BlockList} from 'src/views/screens/app/account/blocklist';
import {YouTubeScreen} from 'src/views/screens/app/childElement/youtube';

function App() {
  return (
    <SafeAreaView>
      <YouTubeScreen />
    </SafeAreaView>
  );
}

export default App;
