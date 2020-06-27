import React, {useMemo} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {Size} from '@themes';
import {HeaderComponent, TopContent, CenterContent} from '../components';
import {ItemComponent} from '@components';
import {listClient} from '@services';

import {styles, CrewText, Code} from './styles';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack/types';
import {AppRoute} from '@navigator';

export interface Plan {
  id: number;
  avt: string;
  name: string;
  description: string;
}

export interface FlightRedProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export const FlightRed: React.FunctionComponent<FlightRedProps> = (
  props: FlightRedProps,
) => {
  const renderItem = (item: Plan, index: number) => (
    <ItemComponent
      image={item.avt}
      title={item.name}
      description={item.description}
      style={{backgroundColor: '#F1F1F1'}}
    />
  );
  const {navigation} = props;

  return (
    <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
      <HeaderComponent
        backgroundColor={'#C32032'}
        title={'Wednesday, Jun 02 '}
        nameLeft={'jfk'}
        nameRight={'sfo'}
        descriptionLeft={'New York'}
        descriptionRight={'San Franciso'}
        onLeftPress={() => navigation.navigate(AppRoute.MyTabs)}
      />
      <View style={styles.code}>
        <Code>PSA-JF5690-SFO</Code>
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
        <CenterContent
          leftTitle={'Gate'}
          rightTitle={'A2'}
          containerStyle={{paddingTop: Size.spacing.huge}}></CenterContent>
        <View style={styles.crew}>
          <CrewText>{'Crew on the flight'}</CrewText>
          <Text style={{fontSize: 16, fontWeight: '500'}}>25</Text>
        </View>
        <FlatList
          data={listClient}
          renderItem={({item, index}) => renderItem(item, index)}
          showsVerticalScrollIndicator={false}
          style={{paddingTop: 20}}
        />
      </ScrollView>
    </View>
  );
};
