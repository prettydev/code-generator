import "react-native-gesture-handler";
import * as React from "react";
import {
  View,
  Text,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

import { Styles } from "./Styles";

function Header(props) {
  return (
    <View style={Styles.header}>
      <View flex={1}>
        <EvilIconsIcon name="navicon" style={Styles.icon} />
      </View>
      <View>
        <Text style={Styles.textTitle}>{props.title}</Text>
      </View>
      <View flex={1}></View>
    </View>
  );
}

export default Header;
