import "react-native-gesture-handler";
import * as React from "react";
import { View } from "react-native";
import { RNCamera } from "react-native-camera";
import { Styles } from "./Styles";

function QRScreen({ navigation }) {
  const onQrCodeRead = (e) => {
    console.log("code:", e.data, "type:", e.type);
    navigation.navigate("HomeScreen", { code: e.data, type: e.type });
  };

  return (
    <View style={Styles.camContainer}>
      <RNCamera style={Styles.camPreview} onBarCodeRead={onQrCodeRead} />
    </View>
  );
}

export default QRScreen;
