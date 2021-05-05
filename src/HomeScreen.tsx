import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from './Styles';
import Header from './Header';

function HomeScreen({navigation}) {
  const [location, setLocation] = React.useState('');

  const goQRScreen = (_) => {
    if (!location || location.length === 0) {
      alert('Input the location!');
      return;
    }
    navigation.navigate('QRScreen', {
      location,
    });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Header title={'Generator'} navigation={navigation} />
      <View style={Styles.formArea}>
        <View style={Styles.formElement}>
          <Text style={Styles.textLabel}>Location</Text>
          <TextInput
            value={location}
            style={Styles.textInput}
            onChangeText={(text) => setLocation(text)}
            onSubmitEditing={goQRScreen}
          />
        </View>
      </View>
      <View style={Styles.footerArea}>
        <TouchableOpacity style={Styles.button} onPress={goQRScreen}>
          <Text style={Styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
