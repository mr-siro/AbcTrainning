/*
 *nhatnv@abcsoft.vn
 */

import React, {useState, createRef} from 'react';
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from 'react-native';

import {Images} from '@assets';
import {styles} from './styles';

import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack/types';
import { AppRoute } from '@navigator';
export interface SignUpProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export const SignUp:React.FunctionComponent<SignUpProps>  = (props: SignUpProps) => {
  const [userName, setUserName] = useState('');
  const [flag, setFlag] = useState('');
  const [passWord, setPassWord] = useState('');
  const [rePassWord, setrePassWord] = useState('');

  const userNameRef = createRef<TextInput>();
  const flagRef = createRef<TextInput>();
  const passWordRef = createRef<TextInput>();
  const rePassWordRef = createRef<TextInput>();
const {navigation} = props;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingVertical: 14,
          }}>
          <View style={{paddingTop: Dimensions.get('window').width / 3}}>
            <Image source={Images.LoGo.SignLogo} style={styles.image} />
          </View>
          <View
            style={{
              paddingVertical: (Dimensions.get('window').width / 2) * 0.3,
            }}>
            <View style={styles.contentContainer}>
              <Text style={styles.textSignIn}>SIGN UP</Text>
              <View style={styles.inputContainer}>
                <View style={{marginHorizontal: 14}}>
                  <Image source={Images.ICUser} />
                </View>
                <TextInput
                  ref={userNameRef}
                  value={userName}
                  onChangeText={(text) => setUserName(text)}
                  placeholder={'Username'}
                  keyboardType={'email-address'}
                  editable={true}
                  style={styles.input}
                  onSubmitEditing={() => flagRef.current?.focus()}
                  returnKeyType={'next'}
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={{marginHorizontal: 14}}>
                  <Image source={Images.IcFlag} />
                </View>
                <TextInput
                  ref={flagRef}
                  value={flag}
                  onChangeText={(text) => setFlag(text)}
                  placeholder={'(+234) 0803402077'}
                  editable={true}
                  style={styles.input}
                  onSubmitEditing={() => passWordRef.current?.focus()}
                  returnKeyType={'next'}
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={{marginHorizontal: 14}}>
                  <Image source={Images.IcLog} />
                </View>
                <TextInput
                  ref={passWordRef}
                  value={passWord}
                  onChangeText={(text) => setPassWord(text)}
                  placeholder={'Password'}
                  editable={true}
                  style={styles.input}
                  onSubmitEditing={() => rePassWordRef.current?.focus()}
                  secureTextEntry={true}
                  returnKeyType={'next'}
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={{marginHorizontal: 14}}>
                  <Image source={Images.IcLog} />
                </View>
                <TextInput
                  ref={rePassWordRef}
                  value={rePassWord}
                  onChangeText={(text) => setrePassWord(text)}
                  placeholder={'Confirm Password'}
                  editable={true}
                  style={styles.input}
                  onSubmitEditing={() => Keyboard.dismiss()}
                  secureTextEntry={true}
                  returnKeyType={'done'}
                />
              </View>
              <TouchableOpacity style={styles.buttonSubmit}>
                <Text
                  style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{paddingTop: (Dimensions.get('window').width / 2) * 0.2}}>
            <Text style={styles.dontAccText} onPress={() => navigation.goBack()}>
              {'Back to Sign in'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
