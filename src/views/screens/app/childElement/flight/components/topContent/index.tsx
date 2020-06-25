import React from 'react';
import {View, Text, Image, ViewStyle} from 'react-native';
import {Size} from '@themes';
import {Images} from '@assets';
import {styles} from './styles';

export interface Props {
  isBorderTop: boolean;
  topTitle: string;
  textLeft: string;
  textRight: string;
  contentStyle?:ViewStyle;
}

export const TopContent = (props: Props) => {
  const {isBorderTop, topTitle, textLeft, textRight,contentStyle} = props;

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: '#979797',
        borderTopWidth: isBorderTop ? 1 : 0,
      }}>
      <View style={{paddingVertical: Size.spacing.huge}}>
        <Text style={{color: '#646464', fontSize: 16}}>{topTitle}</Text>
        <View style={[styles.content,contentStyle]}>
          <View style={{flexDirection: 'row'}}>
            <Image source={Images.PlanLeft} />
            <Text style={styles.textTime}>{textLeft.toLocaleUpperCase()}</Text>
          </View>

          <Text style={{color: '#D8D8D8'}}>|</Text>

          <View style={{flexDirection: 'row'}}>
            <Image source={Images.PlanRight} />
            <Text style={styles.textTime}>{textRight.toLocaleUpperCase()}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
