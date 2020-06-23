import React from 'react';
import {View} from 'react-native';
import {Header, Button, Icon} from 'react-native-elements';
import {Colors, Size} from '@themes';

interface HeaderProps {
  title: string;
  onleftPress?: () => void;
  onrightPress?: () => void;
}

export const HeaderBlockList = (props: HeaderProps) => {
  const {onleftPress, onrightPress, title} = props;

  return (
    <View>
      <Header
        leftComponent={
          <Icon
            name={'arrow-back'}
            color={Colors.AppColor.backgroundAcient}
            onPress={onleftPress ? () => onleftPress() : () => {}}
          />
        }
        centerComponent={{
          text: title,
          style: {
            color: Colors.AppColor.backgroundAcient,
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
        rightComponent={
          <Icon
            name={'ios-add-circle-outline'}
            color={Colors.AppColor.backgroundAcient}
            type={'ionicon'}
            onPress={onrightPress ? () => onrightPress() : () => {}}
          />
        }
        backgroundColor={Colors.AppColor.backgroundPrimary}
      />
    </View>
  );
};
