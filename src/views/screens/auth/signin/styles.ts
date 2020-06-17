import {StyleSheet, Dimensions} from 'react-native';
import {Theme} from '@shared';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.color.AppColor.backgroundPrimary,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  contentContainer: {
    backgroundColor: Theme.color.AppColor.backgroundAcient,
    width: 340,
    borderRadius: 13,
    alignItems: 'center',
    paddingVertical: 30,
  },
  textSignIn: {
    fontSize: 20,
    fontWeight: '700',
    color: Theme.color.ButtonBackground,
  },
  buttonSubmit: {
    backgroundColor: Theme.color.ButtonBackground,
    width: 171,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  input: {
    alignItems: 'center',
    backgroundColor: Theme.color.AppColor.backgroundAcient,
    width: '80%',
  },
  textForgotYourPassword: {fontSize: 16, color: '#8A8A8A', fontWeight: '600'},
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 5,
    width: 279,
    height: 45,
    alignItems: 'center',
    marginTop: 24,
  },
  bottom: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: 14,
    flexDirection: 'column',
    width: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Dimensions.get('window').width / 2) * 0.4,
  },
  signUpText: {
    textDecorationLine: 'underline',
    color: Theme.color.AppColor.backgroundAcient,
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 12,
  },
  dontAccText: {
    color: Theme.color.AppColor.backgroundAcient,
    fontSize: 16,
    fontWeight: '600',
  },
});

export {styles};
