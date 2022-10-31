<!-- <template>
  <div>
    <h1>{{title}}</h1>
    <h2>{{firstname}}</h2>
    <h2>{{lastname}}</h2>
    <h2>{{fullname}}</h2>
    <h2>total power :{{totPower}}</h2>
    <h2 ></h2>
  </div>
</template>

<script>
export default {
  name:'app',
 data(){
  return{
    title : "Batman",
    firstname:'bruce',
    lastname : 'wayne',
    avengers : [
      { title:'spiderman', power :6},
      { title:'batman', power :7},
      { title:'superman', power :10},
      { title:'hulk', power :9},
      { title:'thor', power :8}
    ]
  }
 },
 methods:{
    fullname(){
      return this.firstname+" "+this.lastname;
    }
 },
 computed:{
  totPower(){
    return this.avengers.reduce((initval,val)=>{
        return initval+val
    },0)
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
 -->

 <template>
  <div class="box">
      <h2>{{ title }}</h2>
      <h3>Hero 's Full name {{ firstname+" "+lastname }}</h3>
      <h3>Hero 's Full name {{ fullname }}</h3>
      <h3>Hero 's Full name {{ getFullname() }}</h3>
      <h4>Power {{ power }}</h4>
      <input type="number" v-model="power"><br>
      <button @click="accessPower=99">set power to 99</button>
      <h3>Avenger's total power is {{ avengers.reduce( (initval, val )=>{
        return initval + val.power
      }, 0) }}</h3>
      <h3>Avenger's total power is {{ totalPower }}</h3>
  </div>
</template>
<script>
  export default {
    name : "App",
    data(){
      return {
        title : "Vue Training",
        firstname : "Peter",
        lastname : "Parker",
        power : 0,
        avengers : [
          { title : "Spiderman", power : 6},
          { title : "Ironman", power : 7},
          { title : "Dr Strange", power : 8},
          { title : "Hulk", power : 9},
          { title : "Thor", power : 8},
        ]
      }
    },
    methods : {
        getFullname(){
          console.log("getfullname was called", Math.random());
          return this.firstname+" "+this.lastname;
        }
      },
      computed : {
        fullname(){
          console.log("fullname computed was called", Math.random());
          return this.firstname+" "+this.lastname;
      },
      totalPower(){
        return this.avengers.reduce( (initval, val )=>{
                    return initval + val.power
                }, 0)
      },
      accessPower:{
        get(){return this.power},
        set(npower){this.power = npower}
      }
    }
  }
</script>
<style>
.box{
  text-align: center;
  font-family: sans-serif;
  color : darkslategray
}
</style>
 
<!-- http://p.ip.fi/c2Ol -->