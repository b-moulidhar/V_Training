<template>
  <div>
    <h1>{{msg}}</h1>
    <!-- <input min="0" max="5" type="range" v-model="power"> gives string value -->
    <input min="0" max="5" type="number" v-model="power">
    <h2 v-if="power === 1">power is 1</h2>
    <h2 v-if="power === 2">power is 2</h2>
    <h2 v-if="power === 3">power is 3</h2>
    <h2 v-if="power === 4">power is 4</h2>
    <h2 v-if="power === 5">power is 5</h2>
    <h2 v-else-if="power > 5">power is more</h2>
    <hr>
    <h2 v-if="power === 5">power is 5</h2>
    <h2 v-else>power is not 5</h2>
    <input type="checkbox" v-model="show">
    <template v-if="show">
      <article>Hello There</article>
    <fieldset>
      <legend>terms and conditions</legend>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, praesentium. Aliquid sunt consequuntur asperiores voluptatibus molestias velit? In, corporis enim! Minima dignissimos, impedit temporibus animi fugiat ullam obcaecati tempore qui.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, culpa quisquam veritatis dicta omnis blanditiis! Minus deserunt voluptatem voluptatibus accusamus recusandae enim maiores optio et? Expedita laboriosam velit fugit corporis.
      </p>
    </fieldset>
    </template>
    <h2 v-if="show">shown by if</h2>
    <h2 v-show="show">shown by show</h2>

  </div>
</template>

<script>
export default {
 data(){
  return{
    msg:"welcome to universe 7",
    power:1,
    show:false
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
