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
import {ListItem} from './ListItem';

import {Swipeable} from 'react-native-gesture-handler';

export interface User {
  id: number;
  name: string;
  avt: string;
  xp: string;
}

export const BlockList = React.memo(() => {
  const [blockIds, setBlockIds] = useState([] as number[]);

  const idIsBlock = (id: number) => {
    if (blockIds.includes(id)) return true;
    return false;
  };

  const blockById = (id: number) => {
    if (!blockIds.includes(id)) setBlockIds(blockIds.concat(id));
    console.log('block', id);
  };

  const unBlockById = (id: number) => {
    const indexOf = blockIds.indexOf(id);
    if (indexOf !== -1) {
      setBlockIds(blockIds.splice(indexOf, 1));
      console.log('unblock', id);
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
        borderColor: '#8E8E8E',
        borderWidth: 0.5,
      }}>
      <Text
        style={{
          color: Colors.AppColor.backgroundAcient,
          paddingHorizontal: isBlock ? 19 : Size.spacing.huge,
        }}>
        {isBlock ? 'Unblock' : 'Block'}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = (item: User, index: number) => {
    return (
      <View>
        <Swipeable
          renderLeftActions={() =>
            renderLeftAction(idIsBlock(item.id), item.id)
          }
          onSwipeableLeftOpen={() => {}}>
          <ListItem item={item} />
        </Swipeable>
      </View>
    );
  };
  return (
    <View>
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
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </View>
  );
});
