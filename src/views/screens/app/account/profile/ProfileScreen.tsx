import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Theme} from '@shared';
import {Header} from 'react-native-elements';
export const ProfileScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: Theme.color.AppColor.backgroundAcient,
        }}
        centerComponent={{
          text: 'Add Guardian',
          style: {
            color: Theme.color.AppColor.backgroundAcient,
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
        rightComponent={{
          icon: 'close',
          color: Theme.color.AppColor.backgroundAcient,
        }}
        backgroundColor={Theme.color.AppColor.backgroundPrimary}
      />
      <View style={styles.container}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
