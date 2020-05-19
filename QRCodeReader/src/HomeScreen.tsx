import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Header';

import {Styles} from './Styles';
import {store} from './Store';

function HomeScreen({navigation}) {
  const [state, dispatch] = React.useContext(store);

  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: '',
      phone: '',
    },
  );

  const phoneRef = React.useRef(null);

  const goQRScreen = (_) => {
    dispatch({type: 'setUser', payload: userInput});
    navigation.navigate('QRScreen', {
      name: userInput.name,
      phone: userInput.phone,
    });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header title={'Reader'} navigation={navigation} />
      <View style={Styles.formArea}>
        <View style={Styles.formElement}>
          <Text style={Styles.textLabel}>Name</Text>
          <TextInput
            style={Styles.textInput}
            value={userInput.name}
            onChangeText={(value) => setUserInput({['name']: value})}
            onSubmitEditing={(e) => {
              e.preventDefault();
              phoneRef.current.focus();
            }}
          />
        </View>
        <View style={Styles.formElement}>
          <Text style={Styles.textLabel}>Phone Number</Text>
          <TextInput
            ref={phoneRef}
            style={Styles.textInput}
            value={userInput.phone}
            onChangeText={(value) => setUserInput({['phone']: value})}
            onSubmitEditing={goQRScreen}
          />
        </View>
      </View>
      <View style={Styles.footerArea}>
        <TouchableOpacity style={Styles.button} onPress={goQRScreen}>
          <Text style={Styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
