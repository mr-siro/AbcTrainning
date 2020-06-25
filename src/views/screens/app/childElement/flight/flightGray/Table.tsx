import React from 'react';
import {View, Text} from 'react-native';
import {styles, Diver, Name, Office} from './styles';
import {Colors} from '@themes';

export const Table = () => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableTop}>
        <View style={[styles.itemTopTable, {backgroundColor: '#E42626'}]}>
          <Text style={{color: Colors.White, fontSize: 16}}>Pilot</Text>
        </View>
        <View style={styles.itemTopTable}>
          <Text style={{color: '#E42626', fontSize: 16}}>Attendant</Text>
        </View>
      </View>

      <View style={styles.itemTable}>
        <Name>Jared Keller</Name>
        <Diver>-</Diver>
        <Office>Captain</Office>
      </View>
      <View style={styles.itemTable}>
        <Name>Erik Boyd</Name>
        <Diver>-</Diver>
        <Office>First officer</Office>
      </View>
      <View style={styles.itemTable}>
        <Name>Georgie Vargas</Name>
        <Diver>-</Diver>
        <Office>Assistant</Office>
      </View>
    </View>
  );
};
