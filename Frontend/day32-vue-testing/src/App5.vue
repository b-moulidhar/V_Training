<template>
  <div>
    <h1>{{title}}</h1> 
    <AppHero title="Batman" :power="power" photo="http://tooncrush.com/valtech/batman.jpg" details="hero details to be here"/>
    <AppHero title="Batman" :power="power" :photo="photo" details="hero details to be here"/>
  </div>
</template>

<script>
import AppHero from "./components/apphero.vue"
export default {
 data(){
  return{
    title : "Title",
    power : 8,
    experience : 5,
    photo : require("./assets/images/rajani.jpg")
  }
 },
 components:{
  AppHero
 }

}
</script>

<style scoped>

</style>
