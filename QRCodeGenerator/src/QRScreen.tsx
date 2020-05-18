import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button, TextInput } from "react-native";

function QRScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Your QR Code</Text>
      <Button title="Back" onPress={() => navigation.navigate("HomeScreen")} />
    </View>
  );
}

export default QRScreen;
