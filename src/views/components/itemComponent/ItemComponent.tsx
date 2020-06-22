import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {ItemComponentProps} from './ItemComponentProps';
import {styles} from './styles';
import {Colors} from '@themes';

export const ItemComponent = (props: ItemComponentProps) => {
  const {
    image,
    title,
    description,
    isActive,
    isHightLight,
    style,
    titleStyle,
    descriptionStyle,
    onClick,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        {backgroundColor: isHightLight ? Colors.Border : Colors.White},
        style,
      ]}
      onPress={onClick ? () => onClick() : () => {}}>
      <Image
        source={{uri: image}}
        style={[
          styles.itemImage,
          {
            borderWidth: isActive ? 5 : 0,
            borderColor: Colors.Blue,
          },
        ]}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.name, titleStyle]}>{title}</Text>
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
