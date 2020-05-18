import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button, TextInput } from "react-native";

function HomeScreen({ navigation }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#465F7E",
      }}
    >
      <Text>Generator</Text>
      <Text>Name</Text>
      <TextInput onChangeText={(text) => setName(text)} value={name} />
      <Text>Phone Number</Text>
      <TextInput onChangeText={(text) => setPhone(text)} value={phone} />
      <Button title="Done" onPress={() => navigation.navigate("QRScreen")} />
    </View>
  );
}

export default HomeScreen;
