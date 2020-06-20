import {StyleSheet, Dimensions} from 'react-native';
import {Size, Theme} from 'src/shared';

const styles = StyleSheet.create({
  videoContainer: {
    maxWidth: '100%',
    height: (Dimensions.get('window').width * 9) / 16,
    backgroundColor: 'red',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Size.spacing.medium,
    paddingVertical: Size.spacing.medium,
  },
  imageStyle: {width: 60, height: 60, borderRadius: 150},
  rightContent: {
    marginHorizontal: Size.spacing.large,
    flex: 1,
  },
  titleStyle: {
    fontSize: Size.FontSize.large,
    fontWeight: '600',
  },
  description: {color: '#6B6B6B', marginTop: 5, fontSize: Size.FontSize.medium},
});
export {styles};
