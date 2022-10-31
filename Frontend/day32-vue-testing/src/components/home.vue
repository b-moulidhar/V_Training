<template>
  <div>
    <h1>{{title}}</h1>
    <h2>{{version}}</h2>
  </div>
</template>

<script>
export default {
  name:'HomeComp',
 data(){
  return{
    fname : "Comp title",
    
  }
 },
 props : ['title','version']
}
</script>

<style scoped>

</style>
