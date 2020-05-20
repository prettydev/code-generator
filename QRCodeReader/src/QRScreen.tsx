import "react-native-gesture-handler";
import * as React from "react";
import { View, SafeAreaView } from "react-native";
import { RNCamera } from "react-native-camera";
import BarcodeMask from "react-native-barcode-mask";

import Header from "./Header";

import { Styles, Colors } from "./Styles";
import { store } from "./Store";

function QRScreen({ navigation }) {
  const [state, dispatch] = React.useContext(store);

  const onQrCodeRead = (e) => {
    dispatch({ type: "setLocation", payload: e.data });
    navigation.navigate("ResultScreen");
  };

  return (
    <SafeAreaView style={Styles.camContainer}>
      <Header title={"Reader"} navigation={navigation} />
      <RNCamera style={Styles.camPreview} onBarCodeRead={onQrCodeRead}>
        <BarcodeMask
          edgeColor={Colors.edge}
          animatedLineColor={Colors.hline}
        />
      </RNCamera>
    </SafeAreaView>
  );
}

export default QRScreen;
