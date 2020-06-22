import React from 'react';
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Colors, Size} from '@themes';
import {User} from './index';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  item: User;
}

export const ListItem = ({
  containerStyle,
  imageStyle,
  titleStyle,
  descriptionStyle,
  item,
}: Props) => {
  return (
    <View style={[styles.itemContainer, containerStyle]}>
      <Image source={{uri: item.avt}} style={[styles.itemImage, imageStyle]} />
      <View style={styles.textContainer}>
        <Text style={[styles.name, titleStyle]}>{item.name}</Text>
        <Text style={[styles.description, descriptionStyle]}>
          XP: {item.xp}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 9) / 16,
    backgroundColor: Colors.Border,
  },
  list: {},
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.Black,
    lineHeight: 24,
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    color: Colors.TextPrimary,
    lineHeight: 20,
  },
});
