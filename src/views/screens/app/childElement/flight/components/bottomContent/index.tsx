import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Images} from '@assets';
import {Size} from '@themes';

export interface Props {
  rightText?: string;
}

export const BottomContent = (props: Props) => {
  const {rightText} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Size.spacing.huge,
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <Image source={Images.ICScroll} />
      </TouchableOpacity>
      <Text style={{fontSize: 16, fontWeight: '500'}}>{rightText}</Text>
    </View>
  );
};
