<template>
  <div>
    <!-- step 1 start -->
   <!--  
    <AppHero></AppHero>
    <AppHero>
      Hello Hero Component from Parent
    </AppHero>
    <AppHero>
      <button>click Me</button>
    </AppHero> 
   -->
    <!-- step 1 end -->
    <AppHero>
      <button @click="power++">Click Me to do magic</button>
      <template v-slot:footer>
        <h5>Footer Area Content</h5>
      </template>
      <h4>power : {{power}}</h4>
      <button @click="power--">Click Me to undo magic</button>
      <template v-slot:header>
        <h3>
          {{title}}
        </h3>
      </template>
    </AppHero>
  </div>
</template>
 
<script>
import AppHero from "./components/heroslot.vue";
  export default {
    data(){
      return {
        title : "Welcome to VUE Training",
        power : 0
      }
    },
    components: { AppHero }
  }
</script>
 
<style>
#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>