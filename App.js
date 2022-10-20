import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Vibration } from 'react-native';
import { useState } from 'react';

// import Cronometro from './components/Cronometro.js'
import { vibrate } from './utils'

export default function App() {
  const [tiempo, setTiempo] = useState(1500)
  const [descanso, setDescanso] = useState(300)

  const start = () => {
    setInterval(()=>{
      setTiempo(tiempo => tiempo - 1)
    },1000)
  }

  return (
    <View style={styles.container}>
      <Text>Cronometro Pomodoro</Text>
      <StatusBar style="auto" />

      <Text>{tiempo}</Text>
      <Button
        title="Vibrar"
        onPress={vibrate}
      ></Button>
      <Button
        title="Start"
        onPress={start}
      ></Button>
      {/* <Cronometro onClick={onclick}></Cronometro> */}
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
