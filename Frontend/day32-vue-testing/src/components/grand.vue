 
<template>    
    <div class="box">
        <h2>Grand Parent Component</h2>
        <input v-model="nmessage" type="text">
        <FamParent/>
    </div>
</template>
 
<script>
import FamParent from "./parent.vue"
    export default {
        name : "FamGrand",
        data(){
            return{
                nmessage: 'Hello Fam',
            }
        },
        components: { 
          FamParent
        },
        provide(){
            return {
                message : this.nmessage
            } 
        },
        access :{
            set(nmessage){
                this.message = nmessage
            }
        }
    }
</script>
 
<style>
   .box{
    border:  2px solid rgb(221, 71, 71);
    padding: 10px;
    margin: 10px;
    text-align: left;
    max-width: 600px;
   }
</style>