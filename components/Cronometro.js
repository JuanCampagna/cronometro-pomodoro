import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
 
export default function cronometro(props) {
  const [tiempo, setTiempo] = useState(1500)
  const [descanso, setDescanso] = useState(300)

  // const onclick(() => {
  //   const tiempo = setTiempo(() => {
  //     setCount(prevCount => prevCount - 1);
  //   }, 1000);
  // }, []);

  const onclick = () => {
    setTiempo((prevCount) => {
      prevCount => prevCount - 1;
    }, 1000);
  }

  return (
    <View>
      <Button
        onPress={onclick}
        title="Start"
      >{tiempo}</Button>
    </View>
  )
}
