import "react-native-gesture-handler";
import * as React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { RNCamera } from "react-native-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles, Colors } from "./Styles";

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
