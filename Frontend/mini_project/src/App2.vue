<template>
  <div id="app">
    <ul>
      <li v-for="user in users" :key="user.id">
         {{user.price}}
       </li>
    </ul>
  </div>
</template>

<script>
import usersData from "./data.json";

export default {
  data() {
    return {
      users: usersData.products,
    };
  },
};
</script>