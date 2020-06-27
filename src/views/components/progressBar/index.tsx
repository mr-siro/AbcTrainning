import React, {useRef, useState, useEffect} from 'react';
import {Text, View} from 'react-native';

export interface Props {
  value: number;
}

export const ProgressBar = (props: Props) => {
  const {value} = props;

  return (
    <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#252357'}}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: '#f72517',
          alignItems: 'center',
          margin: 1,
          width: `${value}%`,
        }}>
        <Text>{`${value}%`}</Text>
      </View>
    </View>
  );
};
