<template>
  <div>
    <h1>{{title}}</h1>
    <HomeComp version="experience" title="avengers"/>
    <HomeComp :version="experience" title="Marvel studios"/>
    <HomeComp :version="experience" title="dhoni productions"/>
  </div>
</template>

<script>
import HomeComp from "./components/home.vue"
export default {
 data(){
  return{
    title : "Title",
    power : 8,
    experience : 5
  }
 },
 components:{
  HomeComp
 }

}
</script>

<style scoped>

</style>
