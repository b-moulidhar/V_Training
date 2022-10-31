<template>
  <div>
    <h1>{{title}}</h1>
    <h1 v-once>{{title}}</h1>
    power:<input v-model.number="power" type="range">{{power}} <br>
    booster:<input v-model.lazy.number="booster" type="range">{{booster}} <!-- chaining can be done -->
<br>
total power : {{power + booster}}
<button @click="changeTitle">change title</button>
<p v-pre>hello guys {{power}}</p>
  </div>
</template>

<script>
export default {
 data(){
  return{
    title : "Modifiers",
    power:0,
    booster:0
  }
 },
 methods:{
    changeTitle(){
      this.title = "changed"
    }
 }
}
</script>

<style scoped>

</style>