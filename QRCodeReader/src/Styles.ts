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
    backgroundColor: Colors.primary,
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
  textInput: {
    backgroundColor: Colors.white,
  },
  textTitle: {
    color: Colors.white,
    fontSize: 20,
  },
  textField: {
    color: Colors.white,
    fontSize: 30,
  },
  subTextField: {
    color: Colors.white,
    fontSize: 25,
  },
  textLabel: {
    color: Colors.white,
    fontSize: 18,
    paddingBottom: 12,
  },
  resultArea: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '35%',
    marginBottom: 50,
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
    flexDirection: 'column',
    backgroundColor: Colors.primary,
  },
  camPreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  /** drawer styles */
  drawer: {
    backgroundColor: Colors.primary,
  },
  drawerIcon: {
    width: 33,
    height: 33,
  },
  drawerHeader: {
    marginTop: 10,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerText: {
    color: Colors.white,
    fontSize: 22,
    marginLeft: 12,
  },
  //////////////////////////////////
});
