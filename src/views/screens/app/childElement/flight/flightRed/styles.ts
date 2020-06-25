import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Size, Colors} from '@themes';
import styled from 'styled-components';

const styles = StyleSheet.create({
  container: {paddingHorizontal: Size.spacing.huge},
  flight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  code:{
    width: 222,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 25,
    zIndex: 99,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  crew:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Size.spacing.huge,
    paddingTop: Size.spacing.huge,
  }
});

const CrewText = styled.Text`
  color: #646464;
  fontSize: 16px;
`;

export {styles,CrewText};
