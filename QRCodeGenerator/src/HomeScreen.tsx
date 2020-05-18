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
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';

import {Styles, Colors} from './Styles';

function HomeScreen({navigation}) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <EvilIconsIcon name="navicon" style={Styles.icon} />
        <Text style={Styles.textTitle}>Generator</Text>
        <Text></Text>
      </View>
      <View style={Styles.formArea}>
        <View style={Styles.formElement}>
          <Text style={Styles.textLabel}>Name</Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            value={name}
            style={Styles.textInput}
          />
        </View>
        <View style={Styles.formElement}>
          <Text style={Styles.textLabel}>Phone Number</Text>
          <TextInput
            onChangeText={(text) => setPhone(text)}
            value={phone}
            style={Styles.textInput}
          />
        </View>
      </View>
      <View style={Styles.footerArea}>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate('QRScreen')}>
          <Text style={Styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
