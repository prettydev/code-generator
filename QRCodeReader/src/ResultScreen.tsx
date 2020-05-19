import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Header';

import {Styles} from './Styles';
import {store} from './Store';

function ResultScreen({navigation}) {
  const [state, dispatch] = React.useContext(store);

  return (
    <SafeAreaView style={Styles.container}>
      <Header title={'Reader'} navigation={navigation} />
      <View style={Styles.resultArea}>
        <Text style={Styles.subTextField}>Welcome</Text>
        <Text style={Styles.textField}>{state.user.name}</Text>
        <View />
        <Text style={Styles.subTextField}>to</Text>
        <Text style={Styles.textField}>{state.location}</Text>
      </View>
      <View style={Styles.footerArea}>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={Styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ResultScreen;
