// ./src/router.js

import { createRouter, createWebHistory } from "vue-router";
import BlogPage from "./components/BlogPage.vue";

// Define route components
const routes = [{ path: "/blog", component: BlogPage }];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
