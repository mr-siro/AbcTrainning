import React, {ReactNode} from 'react';
import {View, Text, ViewStyle} from 'react-native';

import {Size, Colors} from '@themes';
export interface Props {
  leftTitle: string;
  rightTitle?: string;
  contentStyle?: ViewStyle;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  rightStyle?: ViewStyle;
  children?: ReactNode;
}
export const CenterContent = (props: Props) => {
  const {
    leftTitle,
    rightTitle,
    style,
    containerStyle,
    contentStyle,
    rightStyle,
    children,
  } = props;

  return (
    <View style={[{paddingHorizontal: Size.spacing.huge}, style]}>
      <View
        style={[
          {
            borderBottomWidth: 1,
            borderColor: '#979797',
            paddingBottom: Size.spacing.huge,
          },
          containerStyle,
        ]}>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            contentStyle,
          ]}>
          <Text style={{color: '#646464', fontSize: 16}}>{leftTitle}</Text>
          {rightTitle ? (
            <View
              style={[
                {
                  backgroundColor: '#DF2528',
                  width: 36,
                  height: 36,
                  justifyContent: 'center',
                  borderRadius: 150,
                },
                rightStyle,
              ]}>
              <Text style={{color: Colors.White, textAlign: 'center'}}>
                {rightTitle.toLocaleUpperCase()}
              </Text>
            </View>
          ) : null}
        </View>
        <View>{children}</View>
      </View>
    </View>
  );
};
