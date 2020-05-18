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
import QRCode from 'react-native-qrcode-svg';
import {Styles, Colors} from './Styles';

function QRScreen({navigation}) {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.qrHeader}></View>
      <View style={Styles.qrArea}>
        <Text style={Styles.qrLabel}>Your QR Code</Text>
        <QRCode value={'aaaaaaaaaaa'} size={250} />
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
