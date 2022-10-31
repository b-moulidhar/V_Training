<template>
  <div>
    <h1>{{ title }}</h1>
    <pre>{{ JSON.stringify(heroinfo, null, 1) }}</pre>
    <form>
        <div class="mb-3">
            <label for="htitle" class="form-label">Hero Title</label>
            <input  v-model="heroinfo.title" type="text" class="form-control" id="htitle">
        </div>
        <div class="mb-3">
            <label for="fname" class="form-label">Firstname</label>
            <input  v-model="heroinfo.firstname" type="text" class="form-control" id="fname">
        </div>
        <div class="mb-3">
            <label for="lname" class="form-label">Larstname</label>
            <input  v-model="heroinfo.lastname" type="text" class="form-control" id="lname">
        </div>
        <div class="mb-3">
            <label for="city" class="form-label">City</label>
            <input  v-model="heroinfo.city" type="text" class="form-control" id="city">
        </div>
        <div class="mb-3">
            <label for="power" class="form-label">Power</label>
            <input v-model="heroinfo.power" type="number" class="form-control" id="power">
        </div>
        <div class="mb-3">
            <label for="canfly" class="form-label">Can fly</label>
            <input v-model="heroinfo.canfly" true-value="can fly" false-value="can't fly" type="checkbox" id="canfly">
        </div>
        <div class="mb-3">
              <label for="gender" class="form-label">male</label>
              <input v-model="heroinfo.gender" name="hgen" type="radio" id="gender" value="male">
              <label for="fgender" class="form-label">female</label>
              <input v-model="heroinfo.gender" name="hgen" type="radio" id="fgender" value="female">          
        </div>
        <div class="mb-3">
            <label for="type" class="form-label">type</label>
            <select v-model="heroinfo.type">
              <option value="" selected>select here</option>
              <option value="avenger" selected>Avenger</option>
              <option value="justice_league" selected>Justice League</option>
              <option value="indic_hero" selected>Indic Hero</option>
            </select>
        </div>
      <button type="submit" class="btn btn-primary"> Register </button>
    </form>
  </div>
</template>
 
<script>
export default {
data(){
  return {
    title : "Forms and Data",
    heroinfo : {
      title : '',
      firstname : '',
      lastname : '',
      city : '',
      power : 0,
      type : '',
      gender : '',
      canfly : "can't fly"
    }
  }
}
}
</script>
 
<style></style>