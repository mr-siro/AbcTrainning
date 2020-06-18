import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Theme, Size} from 'src/shared';

import {Swipeable} from 'react-native-gesture-handler';

export const BlockList = () => {
  const [block, setBlock] = useState(true);

  const data = [
    {
      id: 1,
      avt: 'https://loremflickr.com/320/240',
      name: 'Tova Fennick',
      xp: '5/10',
    },
    {
      id: 2,
      avt: 'https://loremflickr.com/320/240',
      name: 'Robinette Readman',
      xp: '4/10',
    },
    {
      id: 3,
      avt: 'https://loremflickr.com/320/240',
      name: 'Winny Croxton',
      xp: '9/10',
    },
    {
      id: 4,
      avt: 'https://loremflickr.com/320/240',
      name: 'Shara Samudio',
      xp: '10/10',
    },
    {
      id: 5,
      avt: 'https://loremflickr.com/320/240',
      name: 'Jane Wittering',
      xp: '1/10',
    },
    {
      id: 6,
      avt: 'https://loremflickr.com/320/240',
      name: 'Haywood Merck',
      xp: '3/10',
    },
    {
      id: 7,
      avt: 'https://loremflickr.com/320/240',
      name: 'Elli Feirn',
      xp: '8/10',
    },
    {
      id: 8,
      avt: 'https://loremflickr.com/320/240',
      name: 'Wylma Caze',
      xp: '3/10',
    },
    {
      id: 9,
      avt: 'https://loremflickr.com/320/240',
      name: 'Fabio Carles',
      xp: '6/10',
    },
    {
      id: 10,
      avt: 'https://loremflickr.com/320/240',
      name: 'Wilfred Ferrillo',
      xp: '7/10',
    },
  ];

  const [blockList, setBlockList] = useState([1, 3, 5, 7, 9]);
  const onAlert = () =>
    Alert.alert(
      block ? 'Bạn muốn bỏ chặn người này?' : 'Chặn người này?',
      'Cần 24 giờ để hoàn tác',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => handlerBlock()},
      ],
      {cancelable: false},
    );
  const handlerBlock = () => {
    setBlock(!block);
  };
  const leftAction = () => (
    <TouchableOpacity
      onPress={onAlert}
      style={{
        justifyContent: 'center',
        backgroundColor: block ? '#68CF30' : 'red',
      }}>
      <Text
        style={{
          color: Theme.color.AppColor.backgroundAcient,
          paddingHorizontal: Size.spacing.extraLarge,
        }}>
        {block ? 'Unblock' : 'Block'}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: Theme.color.AppColor.backgroundAcient,
        }}
        centerComponent={{
          text: 'Blocked List',
          style: {
            color: Theme.color.AppColor.backgroundAcient,
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
        rightComponent={{
          icon: 'ios-add-circle-outline',
          color: Theme.color.AppColor.backgroundAcient,
          type: 'ionicon',
        }}
        backgroundColor={Theme.color.AppColor.backgroundPrimary}
      />
      <View style={{paddingVertical: Size.spacing.extraLarge}}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => (
            <Swipeable
              renderLeftActions={leftAction}
              onSwipeableLeftOpen={() => console.log('openning')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: Size.spacing.large,
                  paddingHorizontal: Size.spacing.medium,
                }}>
                <Image
                  source={{uri: item.avt}}
                  style={{width: 60, height: 60, borderRadius: 150}}
                />
                <View style={{marginHorizontal: Size.spacing.large}}>
                  <Text
                    style={{fontSize: Size.FontSize.large, fontWeight: '600'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: '#6B6B6B', marginTop: 5}}>
                    XP : {item.xp}
                  </Text>
                </View>
              </View>
            </Swipeable>
          )}
        />
      </View>
    </View>
  );
};
