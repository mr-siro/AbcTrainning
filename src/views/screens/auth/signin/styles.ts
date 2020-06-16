import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5031EC',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 54,
    resizeMode: 'contain',
  },
  contentContainer: {
    backgroundColor: '#ffffff',
    width: 340,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 71,
    paddingVertical: 30,
  },
  textSignIn: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4830C9',
  },
  buttonSubmit: {
    backgroundColor: '#4830C9',
    width: 171,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  input: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
    width: 314,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  signUpText: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 12,
  },
  dontAccText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export {styles};
