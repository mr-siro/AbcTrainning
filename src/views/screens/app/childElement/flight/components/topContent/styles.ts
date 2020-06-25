import {StyleSheet} from 'react-native';

import {Size} from '@themes';

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Size.spacing.medium,
  },
  textTime: {
    paddingLeft: Size.spacing.medium,
    fontSize: 16,
    fontWeight: '500',
  },
});

export {styles};
