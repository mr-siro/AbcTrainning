import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';

import {Colors, Size} from '@themes';
import {listUser} from '@services';

import {ItemComponent, ModalOverlay} from '@components';
import {HeaderBlockList} from './components/Header';
import {Swipeable} from 'react-native-gesture-handler';
import {Input, Button} from 'react-native-elements';
export interface User {
  id: number;
  name: string;
  avt: string;
  xp: string;
}

export const BlockList = React.memo(() => {
  const [listBlock, setListBlock] = useState(listUser);
  const [nameValue, setNameValue] = useState('');
  const [desValue, setDesValue] = useState('');
  const [avtValue, setAvtValue] = useState('');
  let modalDetail = React.createRef<ModalOverlay>();
  let modalAddUser = React.createRef<ModalOverlay>();

  //xoa item khoi list
  const unlockItemById = (id: number) => {
    const filteredData = listBlock.filter((item) => item.id !== id);
    setListBlock(filteredData);
    console.log(filteredData);
  };

  const showConfirmPopup = (id: number) => {
    Alert.alert(
      'Bạn muốn bỏ chặn người này?',
      'Cần 24 giờ để hoàn tác',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => unlockItemById(id),
        },
      ],
      {cancelable: false},
    );
  };
  //hien thi va sua item
  const EditUserForm = (id: number) => {
    const filteredData = listBlock.find((item) => item.id == id);
    const nameValue = filteredData?.name ?? '';
    const deValue = filteredData?.xp ?? '';
    const avtValue = filteredData?.avt ?? '';
    setNameValue(nameValue);
    setDesValue(deValue);
    setAvtValue(avtValue);

    modalDetail.current?.open();
  };
  const closeForm = () => {
    modalDetail.current?.close();
  };
  const addUserForm = () => {
    modalAddUser.current?.open();
  };
  const closeAddForm = () => {
    modalAddUser.current?.close();
  };
  const renderLeftAction = (id: number) => (
    <TouchableOpacity
      onPress={() => showConfirmPopup(id)}
      style={{
        justifyContent: 'center',
        backgroundColor: '#68CF30',
        borderColor: '#8E8E8E',
        borderWidth: 0.5,
      }}>
      <Text
        style={{
          color: Colors.AppColor.backgroundAcient,
          paddingHorizontal: Size.spacing.huge,
        }}>
        {'Unblock'}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = (item: User, index: number) => {
    return (
      <View>
        <Swipeable
          renderLeftActions={() => renderLeftAction(item.id)}
          onSwipeableLeftOpen={() => {}}>
          <ItemComponent
            image={item.avt}
            title={item.name}
            description={`XP: ${item.xp}`}
            onClick={() => EditUserForm(item.id)}
          />
        </Swipeable>
        <ModalOverlay position={'center'} ref={modalDetail}>
          <View>
            <Input
              label={'Name'}
              value={nameValue}
              onChangeText={(value) => setNameValue(value)}
            />
            <Input
              label={'XP'}
              value={desValue}
              onChangeText={(value) => setDesValue(value)}
            />
            <Input
              label={'Image Url'}
              value={avtValue}
              onChangeText={(value) => setDesValue(value)}
            />
            <Button
              title={'Edit'}
              buttonStyle={{backgroundColor: Colors.ButtonBackground}}
              onPress={() => {
                closeForm();
              }}
            />
          </View>
        </ModalOverlay>
      </View>
    );
  };

  const renderAddForm = () => {
    return (
      <ModalOverlay position={'center'} ref={modalAddUser}>
        <View>
          <Input
            label={'Name'}
            value={''}
            onChangeText={(value) => setNameValue(value)}
          />
          <Input
            label={'XP'}
            value={''}
            onChangeText={(value) => setDesValue(value)}
          />
          <Input
            label={'Image Url'}
            value={''}
            onChangeText={(value) => setDesValue(value)}
          />
          <Button
            title={'Edit'}
            buttonStyle={{backgroundColor: Colors.ButtonBackground}}
            onPress={() => {
              closeForm();
            }}
          />
        </View>
      </ModalOverlay>
    );
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBlockList
        title={'Blocked List'}
        onrightPress={() => addUserForm()}
      />
      <FlatList
        style={{paddingTop: Size.spacing.large}}
        data={listBlock}
        renderItem={({item, index}) => renderItem(item, index)}
      />
      <View style={{height: 40}}></View>
      {renderAddForm()}
    </View>
  );
});
