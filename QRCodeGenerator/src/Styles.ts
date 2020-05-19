import {StyleSheet} from 'react-native';
export const Colors = {
  primary: '#465f7e',
  white: '#ffffff',
  dark: '#000000',
  gray: '#999',
};
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
  },
  icon: {
    color: Colors.gray,
    fontSize: 40,
  },
  formArea: {
    width: '80%',
  },
  qrArea: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  formElement: {
    paddingBottom: 60,
  },
  textInput: {
    backgroundColor: Colors.white,
  },
  textTitle: {
    color: Colors.white,
    fontSize: 20,
  },
  textLabel: {
    color: Colors.white,
    fontSize: 18,
    paddingBottom: 12,
  },
  qrLabel: {
    color: Colors.white,
    fontSize: 18,
    paddingBottom: 30,
  },
  footerArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '80%',
  },
  button: {
    backgroundColor: Colors.white,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonText: {
    color: Colors.dark,
    fontSize: 16,
  },
});
