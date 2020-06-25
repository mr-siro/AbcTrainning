import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  ViewStyle,
} from 'react-native';
import {Header, Icon, colors} from 'react-native-elements';
import {Colors, Size} from '@themes';
import {Images} from '@assets';

export interface HeaderProps {
  backgroundColor: string;
  containerStyle?: ViewStyle;
  onLeftPress?: () => void;
  title: string;
  contentStyle?: ViewStyle;
  nameLeft: string;
  descriptionLeft: string;
  nameRight: string;
  descriptionRight: string;
}

export const HeaderComponent = (props: HeaderProps) => {
  const {
    backgroundColor,
    containerStyle,
    onLeftPress,
    title,
    contentStyle,
    nameLeft,
    nameRight,
    descriptionLeft,
    descriptionRight,
  } = props;
  return (
    <View>
      <View
        style={[
          {
            backgroundColor: backgroundColor,
            height: (Dimensions.get('window').width * 9) / 16,
          },
          containerStyle,
        ]}>
        <ImageBackground
          source={Images.ImageBackGround}
          style={{width: '100%', height: '100%'}} resizeMode={'contain'}>
          <Header
            containerStyle={{
              backgroundColor: backgroundColor,
              borderBottomWidth: 0,
            }}
            leftComponent={
              <Icon
                name={'arrow-back'}
                color={Colors.AppColor.backgroundAcient}
                onPress={onLeftPress}
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
            backgroundImage={Images.ImageBackGround}
            barStyle={'light-content'}
          />
          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: '5%',
              },
              contentStyle,
            ]}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{fontWeight: '700', color: Colors.White, fontSize: 28}}>
                {nameLeft.toLocaleUpperCase()}
              </Text>
              <Text
                style={{color: Colors.White, fontSize: Size.FontSize.normal}}>
                {descriptionLeft}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text style={{color: 'rgba(255, 255, 255, 0.5)'}}>------</Text>
              <Image
                source={Images.ICPlan}
                style={{marginHorizontal: Size.spacing.small}}
              />
              <Text style={{color: 'rgba(255, 255, 255, 0.5)'}}>------</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{fontWeight: '700', color: Colors.White, fontSize: 28}}>
                {nameRight.toLocaleUpperCase()}
              </Text>
              <Text
                style={{color: Colors.White, fontSize: Size.FontSize.normal}}>
                {descriptionRight}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
