import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';

import {Colors, Size} from '@themes';
import {Header} from 'react-native-elements';
import {Images} from '@assets';
import {styles} from './styles';

export const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [rela, setRela] = useState('');
  const [timer, setTimer] = useState('');
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');

  const phoneRef = createRef<TextInput>();
  const relaRef = createRef<TextInput>();
  const timerRef = createRef<TextInput>();
  const dayRef = createRef<TextInput>();
  const hourRef = createRef<TextInput>();

  const onValid = () => {
    if (
      name === '' ||
      phone === '' ||
      rela === '' ||
      timer === '' ||
      day === '' ||
      hour === ''
    ) {
      Alert.alert('', 'Bạn chưa nhập đúng thông tin.');
    } else if (
      name.length < 3 ||
      phone.length < 3 ||
      rela.length < 3 ||
      timer.length < 2 ||
      day.length < 2 ||
      hour.length < 2
    ) {
      Alert.alert('', 'Nội dung quá ngắn.');
    } else {
      Alert.alert('', 'Success!');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: Colors.AppColor.backgroundAcient,
        }}
        centerComponent={{
          text: 'Add Guardian',
          style: {
            color: Colors.AppColor.backgroundAcient,
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
        rightComponent={{
          icon: 'close',
          color: Colors.AppColor.backgroundAcient,
        }}
        backgroundColor={Colors.AppColor.backgroundPrimary}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <View
              style={{
                paddingVertical:
                  Dimensions.get('window').scale * Size.spacing.huge,
              }}>
              <View style={styles.avtContainer}>
                <View style={styles.childAvt}>
                  <Image source={Images.AvtDefault} style={styles.avt} />
                </View>
              </View>
            </View>
            <View
              style={{
                paddingBottom:
                  Dimensions.get('window').scale * Size.spacing.huge,
                paddingTop: Size.spacing.medium,
              }}>
              <View style={styles.nameContainer}>
                <Image source={Images.ICProfile.IcName} />
                <TextInput
                  value={name}
                  onChangeText={(value) => setName(value)}
                  placeholder={'Thanos'}
                  style={styles.name}
                  placeholderTextColor={Colors.textColor.titleColor}
                  onSubmitEditing={() => phoneRef.current?.focus()}
                />
              </View>

              <View style={styles.infoContainer}>
                <Image source={Images.ICProfile.IcPhone} />
                <TextInput
                  ref={phoneRef}
                  value={phone}
                  onChangeText={(value) => setPhone(value)}
                  keyboardType={'numeric'}
                  placeholder={'Phone Number'}
                  style={styles.childProfile}
                  placeholderTextColor={Colors.textColor.noteColor}
                  onSubmitEditing={() => relaRef.current?.focus()}
                />
              </View>

              <View style={styles.infoContainer}>
                <Image source={Images.ICProfile.IcRelation} />
                <TextInput
                  ref={relaRef}
                  value={rela}
                  onChangeText={(value) => setRela(value)}
                  placeholder={'Type Of Relation'}
                  style={styles.childProfile}
                  placeholderTextColor={Colors.textColor.noteColor}
                  onSubmitEditing={() => timerRef.current?.focus()}
                />
              </View>

              <View style={styles.infoContainer}>
                <Image source={Images.ICProfile.IcTimer} />
                <TextInput
                  ref={timerRef}
                  value={timer}
                  onChangeText={(value) => setTimer(value)}
                  placeholder={'Inactivy Timer'}
                  keyboardType={'numeric'}
                  style={styles.childProfile}
                  placeholderTextColor={Colors.textColor.noteColor}
                  onSubmitEditing={() => dayRef.current?.focus()}
                />
              </View>

              <View style={styles.dateContainer}>
                <View style={styles.box1}>
                  <Text style={styles.labelStyle}>Day :</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      ref={dayRef}
                      value={day}
                      onChangeText={(value) => setDay(value)}
                      placeholder={'02'}
                      placeholderTextColor={Colors.textColor.popupColor}
                      keyboardType={'numeric'}
                      onSubmitEditing={() => hourRef.current?.focus()}
                      style={{
                        color: Colors.textColor.popupColor,
                      }}
                    />
                  </View>
                </View>

                <View style={styles.box2}>
                  <Text style={styles.labelStyle}>Hour :</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      ref={hourRef}
                      value={hour}
                      onChangeText={(value) => setHour(value)}
                      placeholder={'15'}
                      keyboardType={'numeric'}
                      placeholderTextColor={Colors.textColor.popupColor}
                      onSubmitEditing={() => Keyboard.dismiss()}
                      style={{
                        color: Colors.textColor.popupColor,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                paddingTop: (Dimensions.get('window').width / 2) * 0.6,
              }}>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => onValid()}>
                <Text style={styles.btn}>Add A Guardian</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};
