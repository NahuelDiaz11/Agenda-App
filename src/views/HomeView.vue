


<template>

  

 
<div class="home">
  <h1>Home</h1>
  <button type="button" class="btn btn-primary" @click="goToDaybook">Primary</button>
  <button type="button" class="btn btn-success" @click="goToDaybook">Primary</button>
  <button type="button" class="btn btn-primary" @click="goToDaybook">Primary</button>


</div>

  

  
</template>

<script>
export default {
  methods:{
    goToDaybook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>
