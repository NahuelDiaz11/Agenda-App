import { createRouter, createWebHashHistory } from "vue-router";
import Home from "/src/views/HomeView.vue";
import daybookRouter from "/src/modules/daybook/router/index.js";


const routes = [
  {
    path: "/",

    component: Home,
  },

  {
    path: "/daybook",
    
    ...daybookRouter
  
   
  },
  

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;




