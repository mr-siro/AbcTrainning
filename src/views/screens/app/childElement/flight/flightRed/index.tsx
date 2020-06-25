import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {Size} from '@themes';
import {HeaderComponent, TopContent, CenterContent} from '../components';
import {ItemComponent} from '@components';
import {listClient} from '@services';

import {styles, CrewText} from './styles';

export interface Plan {
  id: number;
  avt: string;
  name: string;
  description: string;
}

export const FlightRed = React.memo(() => {
  const renderItem = (item: Plan, index: number) => (
    <ItemComponent
      image={item.avt}
      title={item.name}
      description={item.description}
      style={{backgroundColor: '#F1F1F1'}}
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
      <HeaderComponent
        backgroundColor={'#C32032'}
        title={'Wednesday, Jun 02 '}
        nameLeft={'jfk'}
        nameRight={'sfo'}
        descriptionLeft={'New York'}
        descriptionRight={'San Franciso'}
      />
      <View
        style={styles.code}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>PSA-JF5690-SFO</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <TopContent
            isBorderTop={false}
            topTitle={'Schedule'}
            textLeft={'12:30 PM'}
            textRight={'10:45 AM'}
            contentStyle={{paddingHorizontal: Size.spacing.huge}}
          />
        </View>
        <CenterContent leftTitle={'Gate'} rightTitle={'A2'}></CenterContent>
        <View
          style={styles.crew}>
          <CrewText>
            {'Crew on the flight'}
          </CrewText>
          <Text style={{fontSize: 16, fontWeight: '500'}}>25</Text>
        </View>

        <FlatList
          data={listClient}
          renderItem={({item, index}) => renderItem(item, index)}
          showsVerticalScrollIndicator={false}
          style={{paddingTop: 20}}
        />
        <View style={{height: 40}}></View>
      </ScrollView>
    </View>
  );
});
