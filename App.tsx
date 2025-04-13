import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import LogDisplay from './components/Logdisplay';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.view1} />
      <Text style={styles.headline}>Welcome to HM-Chef</Text>
      <Button title="Press me" />
      <View style={styles.view2} />
      <TextInput 
        style={styles.inputBox} 
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Enter text here"
      />
      <LogDisplay log_message={text || "This is a test message"} />
      <View style={styles.view3} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headline:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  inputBox: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  view1: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  view2: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  view3: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
});
