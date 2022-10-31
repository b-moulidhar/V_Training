<template>
  <div>
    <h1>{{title}}</h1>
    <!-- <button v-on:click="myfun">click me</button> -->
    <button @click="myfun">click me</button>
    <h2>power:{{power}}</h2>
    <button @click="power++">increase power</button>
    <button @click="power--">decrease power</button>
    <hr>
    <button @click="inpower">increase power</button>
    <button @click="depower">decrease power</button>
    <button @click="inpowerarrow">increase arrow power</button>  <!-- does not work because the this scope changes -->
    <input @input="setPower($event)" type="range"> 
  </div>
</template>

<script>


export default {
  data(){
    return{
      title:"title",
      power:0
    }
  },
  methods:{
    myfun(){
      alert("whats happening!!!")
    },
    inpower(){
      this.power++
    },
    inpowerarrow:()=>{
      this.power++
    },
    depower(){
      this.power--
    },
    setPower(evt){
      this.power = evt.target.value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
