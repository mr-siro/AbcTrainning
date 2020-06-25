import React, {useState} from 'react';
import {View} from 'react-native';
import {Header} from 'react-native-elements';
import {Size} from '@themes';
import {AvatarComponent} from '@components';
import {ProgressBar} from '@components';

export const CustomComponent = () => {
  const imageUrl =
    'https://sohanews.sohacdn.com/thumb_w/660/2019/photo1561344767819-1561344768115-crop-1561344779400758167980.jpg';

  return (
    <View>
      <Header centerComponent={{text: 'Custom Components'}} />
      <View style={{padding: Size.spacing.medium}}>
        <AvatarComponent name={'ahihi'} image={imageUrl} />
        <ProgressBar value={44} />
      </View>
    </View>
  );
};
