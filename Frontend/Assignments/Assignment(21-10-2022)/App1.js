import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Flex = () => {
  let [color,setColor] = useState("")
  // let colorChange = (colors)=>{
  //   console.log(colors);
  //   setColor({
  //     color : colors
  //   })
  // }
  return (
    <View style = {[styles.container]}>
      <View style = {[styles1.container,{backgroundColor:color, alignItems:"flex-end"}]}>
      <View style = {[styles.container]}>
      <Pressable onPress={()=>{setColor("#68B0AB")}}>
      <View style={{ width :100,height:100, backgroundColor: "#68B0AB" }} />
      </Pressable>
      <Pressable onPress={()=>{setColor("#7209b7")}}>
      <View style={{ width :100,height:100, backgroundColor: "#7209b7" }} />
      </Pressable>
      <Pressable onPress={()=>{setColor("#4e1547")}}>
      <View style={{ width :100,height:100, backgroundColor: "#4e1547" }} />
      </Pressable>
      <Pressable onPress={()=>{setColor("#851f47")}}>
      <View style={{ width :100,height:100, backgroundColor: "#851f47" }} />
      </Pressable>
      </View>
    
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    flexDirection : "row"
  },
});
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    flexDirection : "row"
  },
});

export default Flex;