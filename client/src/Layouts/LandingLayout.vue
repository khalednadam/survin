<script setup>
// IMPORTS
import { Icon } from "@iconify/vue";
import { onUnmounted } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify/lib/framework.mjs";
import Footer from "../views/landing/Footer.vue";
import ColorChanger from "../components/ColorChanger.vue";
import Logo from "../components/Logo.vue";
const { mdAndUp } = useDisplay();

const route = useRoute();
const scrolledDown = ref(false);
const drawer = ref(false);
// Function to check if the user has scrolled down
const checkScroll = () => {
  // You can adjust the value (e.g., 100) according to how much scrolling you require to show the element
  scrolledDown.value = window.scrollY > 100;
};

// Attach event listener when component is mounted
onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <v-app-bar :color="scrolledDown ? 'white' : 'white'" :elevation="scrolledDown ? 2 : 0" density="default"
    class="transition-all duration-200" transition="fade-transition">
    <v-container v-if="mdAndUp">
      <div class="flex w-full justify-between items-center">
        <div class="flex items-center justify-start gap-10">
          <Logo />
          <div class="flex gap-7 items-center">
            <div class="flex items-center">
              <!--   <router-link to="/home"> -->
              <!--     <v-btn color="primary" :variant="route.path === '/home' ? 'tonal' : 'text'" -->
              <!--       class="cursor-pointer">Home</v-btn> -->
              <!--   </router-link> -->
              <!-- </div> -->
              <!-- <div class="flex items-center"> -->
              <!--   <router-link to="/home/about"> -->
              <!--     <v-btn color="primary" :variant="route.path === '/home/about' ? 'tonal' : 'text'" -->
              <!--       class="cursor-pointer">About</v-btn> -->
              <!--   </router-link> -->
              <!-- </div> -->
              <!-- <div class="flex items-center"> -->
              <!--   <router-link to="/home/blog"> -->
              <!--     <v-btn color="primary" :variant="route.path === '/home/blog' ? 'tonal' : 'text'" -->
              <!--       class="cursor-pointer">Blog</v-btn> -->
              <!--   </router-link> -->
            </div>
          </div>
        </div>
        <div>
          <ColorChanger />
          <router-link to="/login">
            <v-btn> Login </v-btn>
          </router-link>
          <router-link to="/register">
            <v-btn color="primary" variant="flat"> Register </v-btn>
          </router-link>
        </div>
      </div>
    </v-container>
    <v-container v-else>
      <div class="flex w-full justify-between">
        <div class="flex items-center justify-start gap-10">
          <v-img :width="50" class="" src="/colored-logo.svg"> </v-img>
        </div>
        <div>
          <ColorChanger />
          <v-btn icon @click="drawer = !drawer">
            <Icon icon="ph:list" width="25" v-if="!drawer" />
            <Icon icon="ph:x" width="25" v-else />
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-app-bar>
  <v-container>
    <v-main theme>
      <v-navigation-drawer v-model="drawer" v-if="!mdAndUp" location="right" color="base">
        <v-list>
          <!-- <div class="flex items-center"> -->
          <!-- <v-list-item> -->
          <!--   <router-link to="/home"> -->
          <!--     <p class="cursor-pointer">Home</p> -->
          <!--   </router-link> -->
          <!-- </v-list-item> -->
          <!-- </div> -->
          <!-- <v-list-item> -->
          <!--   <p class="cursor-pointer">About</p> -->
          <!-- </v-list-item> -->
          <!-- <v-list-item> -->
          <!--   <router-link to="/home/blog"> -->
          <!--     <p class="cursor-pointer">Blog</p> -->
          <!--   </router-link> -->
          <!-- </v-list-item> -->
          <v-list-item>
            <router-link to="/login"> Login </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/register">
              <v-btn color="primary" variant="flat"> Register </v-btn>
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <slot></slot>
    </v-main>
  </v-container>
  <Footer />
</template>
