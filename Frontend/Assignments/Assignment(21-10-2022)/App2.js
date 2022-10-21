import { useState } from "react";
import ironman from "./assets/images/ironman.jpg"
import spiderman from "./assets/images/spiderman.jpg"
import superman from "./assets/images/superman.jpg"
import hulk from "./assets/images/hulk.jpg"
import { Button, Text,View,StyleSheet, Platform,Image } from "react-native";
export default function App(){

  let [name,updateName] = useState({title:'',firstname:'',lastname:'',image:''})
  let changeImage=( img )=>{
    if(img ==="ironman"){
      updateName({
        title:"Ironman",
        firstname:"Tony",
        lastname:"Stark",
        image:ironman
      })
    }
    else if(img ==="hulk"){
       updateName({
        title:"Hulk",
        firstname:"Hulk",
        lastname:"Hulk",
        image:hulk
      })
    }
    else if(img ==="superman"){
      updateName({
        title:"Superman",
        firstname:"Clark",
        lastname:"kent",
        image:superman
      })
    }
    else{
      updateName({
        title:"Spiderman",
        firstname:"Peter",
        lastname:"Parker",
        image:spiderman
      })
    }
  }
  return(    
    <View style={[mystyle.viewstyle,{backgroundColor:"grey"}]}>

      <View>
        <Text style={{fontSize:52, color: "#52b69a"}}>Avengers</Text>
      </View>
      <Text/>

      <View>

        {/* <Text style={{fontSize:22}}>
        Firstname: {name.firstname}{"\n"}
      Lastname: {name.lastname}</Text> */}
      <Text style={{fontSize:32,textAlign:"center",color:"#22007c"}} >{name.title}{"\n"} </Text> 
        <Image source={name.image } style={{width:300, height:300}}></Image>


      <View >
        <Button onPress={()=>changeImage("hulk")} title="Hulk"></Button>
        <Text></Text>
        <Button onPress={()=>changeImage("superman")} title="Superman"></Button>
        <Text></Text>
      </View>
      <View style={{justifyContent:'space-between'}}>
        <Button onPress={()=>changeImage("ironman")} title="Ironman"></Button> 
        <Text></Text>
        <Button onPress={()=>changeImage("spiderman")} title="spiderman"></Button>
        <Text/>
      </View>


      </View>

     </View>
   
  )
}
let mystyle = StyleSheet.create({
  viewstyle:{
    flex:1,justifyContent:'center',alignItems:'center',paddingTop: Platform.OS ==="android"?30:0
  }
})