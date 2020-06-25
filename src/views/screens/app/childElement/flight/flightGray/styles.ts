import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Size, Colors} from '@themes';
import styled from 'styled-components';

const styles = StyleSheet.create({
  container: {padding: Size.spacing.huge},
  flight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Size.spacing.huge,
  },
  tableContainer: {
    borderRadius: 5,
    borderColor: '#E42626',
    borderWidth: 1,
  },
  tableTop: {
    flexDirection: 'row',
    width: '100%',
    borderColor: '#E42626',
    borderWidth:1
  },
  itemTopTable: {
    alignItems: 'center',
    width: '50%',
    justifyContent: 'center',
    height: 35,
  },
  itemTable: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E42626',
    height: 44,
    alignItems: 'center',
  },

  bottom: {
    paddingVertical:
      (Platform.OS === 'ios' && Dimensions.get('window').height < 800) ||
      Dimensions.get('window').width < 812
        ? Size.spacing.huge
        : 0,
    marginTop:
      Dimensions.get('window').height > 800
        ? Dimensions.get('window').width / 3.5
        : 0,
  },
});

const Diver = styled.Text`
  color: #6b6b6b;
  marginHorizontal: ${Size.spacing.tiny}px;
`;

const Name = styled.Text`
  marginLeft: ${Size.spacing.medium}px;
  fontSize: 16px;
`;

const Office = styled.Text`
  color: #6b6b6b;
  fontSize: 16px;
`;

export {styles, Diver, Name, Office};
