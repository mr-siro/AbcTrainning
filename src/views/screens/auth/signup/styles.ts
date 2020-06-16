import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5031EC',
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  contentContainer: {
    backgroundColor: '#ffffff',
    width: 340,
    borderRadius: 13,
    alignItems: 'center',
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
