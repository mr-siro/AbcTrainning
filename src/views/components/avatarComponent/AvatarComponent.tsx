import React from 'react';
import {Image, View, Text} from 'react-native';
import {AvatarComponentProps} from './AvatarComponentProps';
import styles from './styles';

export const AvatarComponent = (props: AvatarComponentProps) => {
  const {name, image} = props;
  const getColorCode = () => {
    switch (name[0]) {
      case 'A':
      case 'B':
      case 'C':
      case 'C':
      case 'D': {
        return 'blue';
      }
      case 'E':
      case 'F':
      case 'G':
      case 'H':
      case 'K': {
        return 'yellow';
      }
    }
    return 'red';
  };
  return image ? (
    <Image source={{uri: image}} style={styles.container} />
  ) : (
    <View style={[styles.container, {backgroundColor: getColorCode()}]}>
      <Text>{name[0]}</Text>
    </View>
  );
};
