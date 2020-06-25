import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Size} from '@themes';
import {
  HeaderComponent,
  TopContent,
  CenterContent,
  BottomContent,
} from '../components';
import {styles} from './styles';
import {Table} from './Table';

export const FlightGray = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        backgroundColor={'#334555'}
        title={'2 June, Wensday'}
        nameLeft={'jfk'}
        nameRight={'sfo'}
        descriptionLeft={'New York'}
        descriptionRight={'San Franciso'}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.flight}>
            <Text style={{color: '#646464', fontSize: 16}}>{'Flight'}</Text>
            <Text style={{color: '#1F2932', fontSize: 16}}>
              {'PSA-JF5690-SFO'}
            </Text>
          </View>

          <TopContent
            isBorderTop={true}
            topTitle={'Schedule'}
            textLeft={'12:30 PM, 2 Jun'}
            textRight={'10:45 AM, 3 Jun'}
          />
        </View>
        <CenterContent
          leftTitle={'Crew on the flight'}
          contentStyle={{paddingBottom: Size.spacing.large}}>
          <Table />
        </CenterContent>
        <View style={styles.bottom}>
          <BottomContent rightText={'A2 International Gate'} />
        </View>
      </ScrollView>
    </View>
  );
};
