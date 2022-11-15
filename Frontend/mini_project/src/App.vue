<template>
  <div>
    <div class="container" >

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
  <div class="col" v-for="user in detail" :key="user.id">
    <div class="card shadow-sm">
      <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" _mstaria-label="470535" style="direction: ltr; text-align: left;"><title _mstHash="1686555" _mstTextHash="177515">Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" _mstHash="2151045" _mstTextHash="134056">Thumbnail</text></svg> -->
      <img v-bind:src="user.images" alt="image1">
      <div class="card-body">
        <p class="card-text" _msthash="1937507" _msttexthash="9192963" style="direction: ltr; text-align:center;">
          {{user.style}}</p>
        <p class="card-text" _msthash="1937507" _msttexthash="9192963" style="direction: ltr; text-align: center;">
          {{"$"+user.price}}</p>
          <p class="card-text" _msthash="1937507" _msttexthash="9192963" style="direction: ltr; text-align: center;"> or:
          {{user.installments+" x"+"$"+user.price / user.installments}}</p>
       
        
      </div>
      <button type="button" class="btn btn-dark" >Add to Cart</button>
    </div>
  </div>
</div>
</div>
  </div>
</template>

<script>
import details from "./data.json";

export default {
  data() {
    return {
      detail: details.products,
    };
  },
};
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
.button{
  width: "100%";
  height: 50px;
}
</style>
