<template>  
    <div>
      <pre>{{ JSON.stringify(users,null,1) }}</pre>
      <button @click="getUsers">Get Data</button>
      <ol v-for="(user, key) in users" :key="key">
        <li> {{user.id}}</li>
        <li> {{user.first_name}}</li>
        <li> {{user.last_name}}</li>
        <li> {{user.id}}</li>
      </ol>
    </div>
  </template>
  
  <script>
  import axios from "axios";
    export default {
     name : "AppUsers",
      data(){
        return {
          users : []
        }
      },
      methods : {
       getUsers(){
          axios.get("https://reqres.in/api/users?page=2")
          .then( res => this.users = res.data.data )
          .catch( err => console.log( err ))
      
      }
    }
}
  </script>
  
  <style>
 
  </style>