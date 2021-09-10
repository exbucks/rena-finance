import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from "./components/HelloWorld"
import Page1 from "./views/Page1"
import Page2 from "./views/Page2"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/about",
    name: "About",
    component: Page1,
  },
  {
    path: "/price",
    name: "Price",
    component: Page2,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router