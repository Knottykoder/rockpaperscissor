import React, { useEffect, useState } from "react";
import {Image, Button, StyleSheet,Text,View} from "react-native";

const rock = require('../signs/rock.png');
const paper = require('../signs/paper.png');
const scissors = require('../signs/scissors.png');

const rps=()=>{
  const sign = [rock,paper,scissors];
  const rand = Math.floor(Math.random()*3);
  return sign[rand];
};

const bgcolor = ['#1abc9c','#3498db','#9b59b6']; 

const PlayScreen = ()=>{
  
  const [counter,setcounter]=useState(3);
    useEffect(()=>{
         if(counter === 0 )return; 
           const timer = setTimeout(()=>{
              setcounter(counter-1);
           },500);
           return()=>{
               clearTimeout(timer);
           }
        },[counter] 
       );

    return (
        <View style={StyleSheet.compose (styles.container,{backgroundColor:bgcolor[counter-1]})}>
            { counter > 0 ? (<Text style={styles.header}>{counter}</Text>):
            (<>
            <Image style={styles.img} source={rps()} />
            <View style={styles.button1}>
            <Button  onPress={()=> setcounter(3)} title="PLAY AGAIN"/>
            </View>
            </>
            )} 
          </View>
      );
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      fontSize: 150,
      },
    img:{
      width:200,
      height:200,
    },
    button1:{
      position:"absolute",
      bottom:25,
    }
  });

  export default PlayScreen;