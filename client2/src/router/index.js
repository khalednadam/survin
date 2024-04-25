import { createRouter, createWebHistory } from "vue-router";

import AuthLayout from "../Layouts/AuthLayout.vue";
import AppLayout from "../Layouts/AppLayout.vue";
import LandingLayout from "../Layouts/LandingLayout.vue";

import { createPinia } from "pinia";
import { useCurrentUser } from "../stores/auth";

const pinia = createPinia();
const currentUserStore = useCurrentUser(pinia);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      meta: {
        layout: AppLayout,
        auth: true,
      },
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/Settings.vue"),
      meta: {
        admin: false,
        layout: AppLayout,
        auth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
      meta: {
        layout: AuthLayout,
        auth: false,
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/ForgotPassword.vue"),
      meta: {
        layout: AuthLayout,
        auth: false,
      },
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("../views/ResetPassword.vue"),
      meta: {
        layout: AuthLayout,
        auth: false,
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
      meta: {
        layout: AuthLayout,
        auth: false,
      },
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/landing/index.vue"),
      meta: {
        layout: LandingLayout,
        auth: false,
      },
    },
    {
      path: "/home/blog",
      name: "blogs",
      meta: {
        layout: LandingLayout,
        auth: false,
        admin: false,
      },
      component: () => import("../views/landing/Blogs.vue"),
    },
    {
      path: "/home/blog/:blogPostId",
      name: "post",
      meta: {
        layout: LandingLayout,
        auth: false,
        admin: false,
      },
      component: () => import("../views/landing/BlogPost.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "ErrorView",
      component: () => import("../views/Error.vue"),
      meta: {
        auth: true,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  try {
    await currentUserStore.getUser();
    const isAuth = !!currentUserStore.user.id;
    currentUserStore.user && currentUserStore.user.role === "admin";
    console.log(isAuth);
    // Redirect unauthenticated users to the home page if the route requires authentication
    if (to.meta.auth && !isAuth) {
      next({ name: "home" });
      return;
    }
    // Redirect authenticated users away from non-auth pages
    if (!to.meta.auth && isAuth) {
      next({ name: "main" });
      return;
    }
    // Redirect non-admin users away from admin-only pages
    // if (to.meta.admin && !isAdmin) {
    //   next({ name: "main" });
    //   return;
    // }
    // if (!to.meta.admin && isAdmin) {
    //   next({ name: "admin" });
    //   return;
    // }
    next(); // Proceed to the requested route
  } catch (err) {
    console.log(err);
  }
});
export default router;
