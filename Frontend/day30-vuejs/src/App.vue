<template> 
  <div>
    <h1>Welcome to universe 7</h1>
    <h1>hero : {{title}}</h1>
    <h2>age : {{age*2}}</h2>
    <hr>
    <h2 v-html="tag"></h2>
    <hr>
    <div v-bind:class="dynamicClass">
      hello world
    </div>
    <div v-bind:id="dynamicId">
      hello world
    </div>
    <button v-bind:disabled="show">hit me</button>
    <input type="checkbox" v-model="show">
    <fieldset v-bind:hidden="!show">
      <legend>terms and conditions</legend>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusantium, dolore illo alias libero necessitatibus sit odit neque quas, quia consequatur? Esse officia natus voluptate ex nostrum aspernatur, accusantium minima.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eum eveniet quod laborum ut provident tempora aspernatur, totam iste dolores reprehenderit cumque possimus sequi hic magni laudantium culpa autem harum!Lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti nisi odio asperiores iusto accusamus eos deserunt id eligendi fugit provident eum, laboriosam, hic molestiae natus distinctio ab ratione laborum.

      </p>
    </fieldset>
    <hr>
    <div v-bind:class="[dynamicClass, 'brdr']">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates harum dolore, beatae similique sed id corporis repellat culpa fugit facilis voluptatem repudiandae sequi minima totam deleniti? Provident architecto velit in?
      </p>
    </div>
    <div v-bind:class="{ 'bluebox':gender==='male'}">
      gender based comp
      <hr>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates harum dolore, beatae similique sed id corporis repellat culpa fugit facilis voluptatem repudiandae sequi minima totam deleniti? Provident architecto velit in?
      </p>
    </div>
    <div v-bind:lang="fr">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ipsam sed ipsum quibusdam iure officiis perspiciatis excepturi iusto distinctio tempore vitae dicta temporibus doloribus quos expedita, animi nihil doloremque laboriosam!</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      title:"Goku",
      age : 22,
      tag : "<span> let's <u>fight</u> <em>vegeta</em> </span>",
      dynamicClass : "box",
      dynamicId: "player",
      show:true,
      gender:"male",
      languages : "fr"
    }
  }
}
</script>

<style>
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  width: 300px;
  height: 150px;
  font-family: sans-serif;
  text-align: center;
  color: #d7dcd8;
  background-color: crimson;
  line-height: 150px;
  overflow: auto;
}
.brdr{
  border: 4px dotted yellow;
}
.pinkbox {
  margin-top: 10px;
  width: 300px;
  height: 150px;
  font-family: sans-serif;
  text-align: center;
  color: #d7dcd8;
  background-color: palevioletred;
  line-height: 16px;
  overflow: auto;
}
.bluebox {
  margin-top: 10px;
  width: 300px;
  height: 150px;
  font-family: sans-serif;
  text-align: center;
  color: #d7dcd8;
  background-color: blue;
  line-height: 16px;
  overflow: auto;
}
#player {
  margin-top: 10px;
  width: 300px;
  height: 150px;
  font-family: sans-serif;
  text-align: center;
  color: #d7dcd8;
  background-color: rgb(116, 6, 234);
  line-height: 150px;
}
</style>
