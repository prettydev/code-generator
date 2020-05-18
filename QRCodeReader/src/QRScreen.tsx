import 'react-native-gesture-handler';
import * as React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles, Colors} from './Styles';

function QRScreen({navigation, route}) {
  const {name, phone} = route.params;
  const qrvalue = `${name}:${phone}`;

  console.log(qrvalue);

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.qrHeader}></View>
      <View style={Styles.qrArea}>
        <Text style={Styles.qrLabel}>Your QR Code</Text>
      </View>
      <View style={Styles.footerArea}>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={Styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default QRScreen;
