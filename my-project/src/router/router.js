import { createRouter, createWebHistory } from "vue-router"
import Home from "@/page/Home/Home.vue"
import Book from "../../src/components/Book/Book.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/details/:id",
      component: Book
    }
  ]
})

export default router
