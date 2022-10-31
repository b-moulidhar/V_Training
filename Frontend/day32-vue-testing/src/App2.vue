<template>
  <div>
    <h1>{{title}}</h1>
    <h2>{{power}}</h2>
    <button @click="power++" v-show="show">increase power</button>
    <h2>{{message}}</h2>
  </div>
</template>

<script>


export default {
 data(){
  return{
    title : "Title",
    power : 0,
    message: "hero not ready to fight",
    show:true
 
  }
 },
 watch:{
  // power(){
  //   if(this.power > 5){
  //     this.message = "hero is ready to fight"
  //   }
  // }
  power(npower){
    if(npower > 5 && this.power <=10){
      this.message = "hero is ready to fight"
    }else if( npower >10){
     this.show = false;
     this.message = "hero is overpowered"
  }
 }
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>