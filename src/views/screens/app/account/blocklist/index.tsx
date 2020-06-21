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
import {Colors, Size} from '@themes';
import {listUser} from '@services';

import {Swipeable} from 'react-native-gesture-handler';

export const BlockList = () => {
  const [blockIds, setBlockIds] = useState([] as number[]);
  const idIsBlock = (id: number) => {
    if (blockIds.includes(id)) return true;
    return false;
  };
  const blockById = (id: number) => {
    if (!blockIds.includes(id)) setBlockIds(blockIds.concat(id));
  };
  const unBlockById = (id: number) => {
    const indexOf = blockIds.indexOf(id);
    if (indexOf !== -1) {
      blockIds.splice(indexOf, 1);
    }
  };
  const showConfirmPopup = (isBlock: boolean, id: number) => {
    Alert.alert(
      isBlock ? 'Bạn muốn bỏ chặn người này?' : 'Chặn người này?',
      'Cần 24 giờ để hoàn tác',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => (isBlock ? unBlockById(id) : blockById(id)),
        },
      ],
      {cancelable: false},
    );
  };
  const renderLeftAction = (isBlock: boolean, id: number) => (
    <TouchableOpacity
      onPress={() => showConfirmPopup(isBlock, id)}
      style={{
        justifyContent: 'center',
        backgroundColor: isBlock ? '#68CF30' : 'red',
      }}>
      <Text
        style={{
          color: Colors.AppColor.backgroundAcient,
          paddingHorizontal: Size.spacing.extraLarge,
        }}>
        {isBlock ? 'Unblock' : 'Block'}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: Colors.AppColor.backgroundAcient,
        }}
        centerComponent={{
          text: 'Blocked List',
          style: {
            color: Colors.AppColor.backgroundAcient,
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
        rightComponent={{
          icon: 'ios-add-circle-outline',
          color: Colors.AppColor.backgroundAcient,
          type: 'ionicon',
        }}
        backgroundColor={Colors.AppColor.backgroundPrimary}
      />
      <View style={{paddingVertical: Size.spacing.extraLarge}}>
        <FlatList
          data={listUser}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => (
            <Swipeable
              renderLeftActions={() =>
                renderLeftAction(idIsBlock(item.id), item.id)
              }
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
