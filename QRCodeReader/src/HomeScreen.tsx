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
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

import { Styles, Colors } from "./Styles";

function HomeScreen({ navigation, route }) {
  const { code, type } = route.params;
  let code_arr = code.split(":");
  let name = "";
  let phone = "";

  if (code_arr.length === 2) {
    name = code_arr[0];
    phone = code_arr[1];
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <EvilIconsIcon name="navicon" style={Styles.icon} />
        <Text style={Styles.textTitle}>Reader</Text>
        <Text></Text>
      </View>
      <View style={Styles.formArea}>
        <View style={Styles.formElement}>
          <Text style={Styles.textLabel}>Name</Text>
          <Text style={Styles.textField}>{name}</Text>
        </View>
        <View style={Styles.formElement}>
          <Text style={Styles.textLabel}>Phone Number</Text>
          <Text style={Styles.textField}>{phone}</Text>
        </View>
      </View>
      <View style={Styles.footerArea}>
        <TouchableOpacity
          style={Styles.button}
          onPress={() =>
            navigation.navigate("QRScreen", {
              name,
              phone,
            })}
        >
          <Text style={Styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
