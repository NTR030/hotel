import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../page/HomePage.vue");
const NotFound = () => import("../page/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/hotels",
      component: null,
      children: [
        {
          path: ":name",
          component: null,
          props: true,
        },
      ],
    },
    {
      path: "/order",
      component: null,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
