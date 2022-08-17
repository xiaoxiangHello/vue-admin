import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Audit from "@/views/Audit.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path:"/audit",
    name:"Audit",
    component:Audit
  },
  {
    path:"/login",
    name:'Login',
    component:Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  var fullPath = to.fullPath.toLowerCase()
  console.log(fullPath)
  if(fullPath !== '/login'){
    var get_token = localStorage.getItem('admin_token')
    console.log("fullpath is:" +fullPath)
    if(get_token === null || get_token === ""){
      console.log("replace login")
      return router.replace({name:'login'})
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router;