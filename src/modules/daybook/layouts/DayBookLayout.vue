<!-- <template>
  

  <div class="d-flex">
    <div class="col-4">
    <EntryList/>
    </div>
    <div class="col">
      <h1>asdsa</h1>
      <RouterView/>
    </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from "vue";
export default{
  components:{
    Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))

  }
}

</script> -->

<template>
  <Navbar />

  <div class="d-flex">
      <div class="col-">
          <EntryList />
         
      </div>
      <div class="col-10">
      
          <router-view />
      </div>
  </div>
</template>



<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
      Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
      EntryList: defineAsyncComponent(() => import('../components/EntryList.vue')),
  }
}
</script>

