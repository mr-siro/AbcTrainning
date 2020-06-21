import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Size} from '@themes';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: Size.spacing.medium,
    paddingVertical: Size.spacing.medium,
  },
  avtContainer: {
    backgroundColor: '#EAEAEA',
    width: 125,
    height: 125,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  childAvt: {
    borderRadius: 150,
    width: 108,
    height: 108,
    backgroundColor: Colors.AppColor.backgroundAcient,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avt: {width: 94, height: 94, borderRadius: 150},
  name: {
    fontSize: Size.FontSize.large,
    paddingHorizontal: Size.spacing.large,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Size.spacing.large,
    paddingHorizontal: Size.spacing.medium,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Size.spacing.medium,
    borderWidth: 0.3,
    borderColor: '#EAEAEA',
    borderRadius: 5,
    paddingHorizontal: Size.spacing.medium,
  },
  childProfile: {
    fontSize: Size.FontSize.large,
    paddingHorizontal: Size.spacing.large,
    height: 40,
    justifyContent: 'center',
    width: '92%',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Size.spacing.large,
    paddingHorizontal: Size.spacing.extraLarge,
  },
  inputContainer: {
    width: 43,
    height: 29,
    borderRadius: 5,
    borderColor: Colors.textColor.popupColor,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: Size.FontSize.large,
    paddingHorizontal: Size.spacing.medium,
    color: Colors.textColor.titleColor,
  },
  box1: {flexDirection: 'row', alignItems: 'center'},
  box2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Size.spacing.large,
  },
  btnContainer: {
    backgroundColor: Colors.ButtonBackground,
    width: 197,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  btn: {
    color: Colors.AppColor.backgroundAcient,
    fontSize: Size.FontSize.large,
    fontWeight: '600',
  },
});

export {styles};
