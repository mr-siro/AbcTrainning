import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles, Diver, Name, Office} from './styles';
import {Colors} from '@themes';
import {pilot, attendant} from '@services';

export const Table = React.memo(() => {
  const [isPilot, setIsPilot] = useState(true);

  const renderPilot = () => {
    return (
      <View>
        {pilot.map((item, index) => {
          return (
            <View>
              <View style={styles.itemTable}>
                <Name>{item.name}</Name>
                <Diver>-</Diver>
                <Office>{item.office}</Office>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  const renderAttendant = () => {
    return (
      <View>
        {attendant.map((item, index) => {
          return (
            <View>
              <View style={styles.itemTable}>
                <Name>{item.name}</Name>
                <Diver>-</Diver>
                <Office>{item.office}</Office>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableTop}>
        <TouchableOpacity
          onPress={() => setIsPilot(true)}
          style={[
            styles.itemTopTable,
            {backgroundColor: isPilot ? '#E42626' : Colors.White},
          ]}>
          <Text style={{color: isPilot ? Colors.White : '#E42626', fontSize: 16}}>
            Pilot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsPilot(false)}
          style={[
            styles.itemTopTable,
            {backgroundColor: isPilot ? Colors.White : '#E42626'},
          ]}>
          <Text style={{color: isPilot ? '#E42626' : Colors.White, fontSize: 16}}>
            Attendant
          </Text>
        </TouchableOpacity>
      </View>
      {isPilot ? renderPilot() : renderAttendant()}
    </View>
  );
});
