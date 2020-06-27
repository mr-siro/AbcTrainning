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
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack/types';
import {AppRoute} from '@navigator';

export interface FlightGrayProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export const FlightGray: React.FunctionComponent<FlightGrayProps> = (
  props: FlightGrayProps,
) => {
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        backgroundColor={'#334555'}
        title={'2 June, Wensday'}
        nameLeft={'jfk'}
        nameRight={'sfo'}
        descriptionLeft={'New York'}
        descriptionRight={'San Franciso'}
        onLeftPress={() => navigation.navigate(AppRoute.MyTabs)}
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
