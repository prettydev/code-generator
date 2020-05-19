import 'react-native-gesture-handler';
import * as React from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import {Styles, Colors} from './Styles';

function QRScreen({navigation}) {
  const onQrCodeRead = (e) => {
    console.log('code:', e.data, 'type:', e.type);
    navigation.navigate('HomeScreen', {code: e.data, type: e.type});
  };

  return (
    <View style={Styles.camContainer}>
      <RNCamera style={Styles.camPreview} onBarCodeRead={onQrCodeRead}>
        <BarcodeMask edgeColor={Colors.edge} animatedLineColor={Colors.hline} />
      </RNCamera>
    </View>
  );
}

export default QRScreen;
