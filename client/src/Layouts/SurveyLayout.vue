<script setup>
import { onMounted } from "vue";
import { useCurrentUser } from "@/stores/auth";
import Logo from "../components/Logo.vue";
const authStore = useCurrentUser();


onMounted(() => {
  authStore.getUser();
});

</script>
<template>
  <v-app-bar :elevation="scrolledDown ? 2 : 0" density="default" class="transition-all duration-200"
    transition="fade-transition" :color="scrolledDown ? 'white' : 'white'">
    <v-container>
      <div class="flex w-full justify-between items-center">
        <div class="flex items-center justify-start gap-10">
          <router-link to="/">
            <Logo />
          </router-link>
        </div>
      </div>
    </v-container>
  </v-app-bar>
  <v-container>
    <v-main>
      <slot></slot>
    </v-main>
  </v-container>
</template>
