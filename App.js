import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PlayScreen from './src/Playscreen';
export default function App() {

   const [play,setplay]= useState(false)
  return (
    play ? (<PlayScreen/>):(
<View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <Text style={{fontSize:70}}>✊ ✋ ✌️</Text>
      <View style={styles.Button}>
      <Button onPress={()=>setplay(true)}  title='play'/>
       </View>
       <Text style={styles.bottom}>Design by Hemant</Text>
    </View>
    )
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize: 30,
    marginBottom:50,
    },
    Button:{
      width:280,  
      marginTop:150,
    },
    bottom:{
      marginTop:20,
      fontSize:25,
    }
});
