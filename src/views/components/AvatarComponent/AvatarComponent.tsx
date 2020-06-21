import * as React from 'react';
import {AvatarComponentProps} from './AvatarComponentProps';
import styles from './AvatarComponentStyles';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Utils} from '@services';

export function AvatarConponent(props: AvatarComponentProps) {
  const {full_name, picture, size, style, isSmallSize} = props;
  const initialColor = function (displayName: string) {
    const code = Math.abs(hashed(displayName) % 10);
    switch (code) {
      case 0:
        return '#f96868';
      case 1:
        return '#e53b75';
      case 2:
        return '#6d45bc';
      case 3:
        return '#465bd4';
      case 4:
        return '#324b81';
      case 5:
        return '#37a9b7';
      case 6:
        return '#178d81';
      case 7:
        return '#279566';
      case 8:
        return '#70a532';
      case 9:
        return '#fbc02d';
    }
  };

  const hashed = function (str: string) {
    if (!str) return 0;
    let hash = 0,
      i,
      chr,
      len;
    if (str.length === 0) {
      return hash;
    }
    for (i = 0, len = str.length; i < len; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  };
  return picture ? (
    <FastImage
      source={{
        uri: picture,
      }}
      style={[isSmallSize ? styles.imageSmall : styles.image, style]}
      resizeMode={FastImage.resizeMode.contain}
    />
  ) : (
    <View
      style={[
        isSmallSize ? styles.noImageSmall : styles.noImage,
        {backgroundColor: initialColor(full_name ? full_name : '')},
        style,
      ]}>
      <Text style={isSmallSize ? styles.nameSmall : styles.name}>
        {Utils.getNameFirstChart(full_name)}
      </Text>
    </View>
  );
}
