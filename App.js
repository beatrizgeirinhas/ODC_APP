import React from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import HomeScreen from './screens/homeScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
          title="Press me"
          onPress={() => <HomeScreen/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
