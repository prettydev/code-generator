import {StyleSheet} from 'react-native';
export const Colors = {
  primary: '#465f7e',
  white: '#ffffff',
  dark: '#000000',
  gray: '#999',
  edge: '#a1d34c',
  hline: '#bb716d',
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
  formElement: {
    paddingBottom: 60,
  },
  textTitle: {
    color: Colors.white,
    fontSize: 20,
  },
  textField: {
    color: Colors.white,
    fontSize: 30,
  },
  textLabel: {
    color: Colors.white,
    fontSize: 18,
    paddingBottom: 12,
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
  camContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  camPreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
