import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  Dimensions,
  Platform,
} from 'react-native';

import {Colors, Size} from '@themes';
import {listUser} from '@services';

import {ItemComponent} from '@components';
import {HeaderBlockList} from './components/Header';
import {Swipeable} from 'react-native-gesture-handler';
import {Input, Button} from 'react-native-elements';
import Modal from 'react-native-modal';

export interface User {
  id: string;
  name: string;
  avt: string;
  xp: string;
}

export const BlockList = React.memo(() => {
  const [listBlock, setListBlock] = useState(listUser);
  const [formName, setFormName] = useState('');
  const [formXp, setformXp] = useState('');
  const [formAvt, setFormAvt] = useState('');
  const [formId, setFormId] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  //xoa item khoi list
  const unlockItemById = (id: string) => {
    const filteredData = listBlock.filter((item) => item.id !== id);
    // console.log('Deleted:', id);
    setListBlock(filteredData);
  };

  const showConfirmPopup = (id: string) => {
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
  const resetForm = () => {
    console.log('abc');
    setFormName('');
    setFormId('');
    setformXp('');
    setFormAvt('');
  };
  const toggleForm = () => {
    resetForm();
    setModalVisible(!isModalVisible);
  };

  const EditUserForm = (id: string) => {
    const filteredData = listBlock.find((item) => item.id == id);
    if (filteredData) {
      setFormName(filteredData.name);
      setFormAvt(filteredData.avt);
      setformXp(filteredData.xp);
      setFormId(filteredData.id.toString());
      setModalVisible(!isModalVisible);
    }
  };

  // add item
  const handleAddForm = () => {
    let item = {
      id: Math.random().toString(),
      name: formName,
      avt: formAvt,
      xp: formXp,
    };
    let addList = listBlock.concat(item);
    setListBlock(addList);
    toggleForm();
  };

  const handleEditForm = () => {
    const mapListBlock = [...listBlock];
    const edittedItem = listBlock.find((item: User) => item.id === formId);
    const indexOf = edittedItem ? listBlock.indexOf(edittedItem) : -1;
    if (edittedItem && indexOf !== -1) {
      console.log('edittedItem', edittedItem);
      edittedItem.avt = formAvt;
      edittedItem.name = formName;
      edittedItem.xp = formXp;
      mapListBlock[indexOf] = edittedItem;
      setListBlock(mapListBlock);
    }
    setModalVisible(!isModalVisible);
  };

  const renderLeftAction = (id: string) => (
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
      <View style={{flex:1}}>
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
      </View>
    );
  };

  const renderForm = () => {
    return (
      <Modal isVisible={isModalVisible} onBackdropPress={() => toggleForm()}>
        <View
          style={{
            padding: Size.spacing.large,
            backgroundColor: Colors.White,
            borderRadius: 10,
            justifyContent: 'center',
          }}>
          <Input
            label={'Name'}
            value={formName}
            onChangeText={(value) => setFormName(value)}
          />
          <Input
            label={'XP'}
            value={formXp}
            onChangeText={(value) => setformXp(value)}
          />
          <Input
            label={'Image Url'}
            value={formAvt}
            onChangeText={(value) => setFormAvt(value)}
          />
          <Button
            title={formId ? 'Edit' : 'Add'}
            buttonStyle={{backgroundColor: Colors.ButtonBackground}}
            onPress={formId ? () => handleEditForm() : () => handleAddForm()}
          />
        </View>
      </Modal>
    );
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBlockList
        title={'Blocked List'}
        onrightPress={() => toggleForm()}
      />
      {listBlock.length == 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>{'Bạn chưa chặn ai'}</Text>
        </View>
      ) : (
        <FlatList
          data={listBlock}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      )}
      {renderForm()}
    </View>
  );
});
