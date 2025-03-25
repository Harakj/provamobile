import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Gallery, Artist } from './componenetes/profile';
import Profile from './componenetes/profile';
import { Test } from './componenetes/Test';

export default function App() {
  return (
    <View style={appstylee.containerapp}>
      <Test/>
    </View>
  );
}

const appstylee = StyleSheet.create({
  containerapp:{
    flex: 1,
  }

})


