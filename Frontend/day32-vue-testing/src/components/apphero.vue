<template>
    <div>
      <h1>{{title}}</h1>
      <h1>Power : {{power}}</h1>
      <img  :src="photo" alt="title">
      <textarea v-text="details" cols="30" rows="10"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name:'AppHero',
   data(){
    return{
      fname : "Comp title",
      
    }
   },
   props : {
    title:String,
    power : Number,
    photo: String,
    details: String

   }
  }
  </script>
  
  <style scoped>
  
  </style>
  