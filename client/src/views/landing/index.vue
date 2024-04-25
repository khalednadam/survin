<script setup>
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
</script>
<template>
  <div>
    <div class="h-[60vh] w-full flex md:flex-row justify-start items-center">
      <div class="w-full flex items-start gap-5 justify-start flex-col">
        <h1 class="text-5xl md:max-w-[90%] font-light text-start">
          Unleash Your Influence:
          <span class="text-primary font-bold">Surveys</span> - Where Every
          Voice Becomes a Heroic Catalyst for
          <span class="text-primary font-bold">Change!</span>
        </h1>
        <div class="mt-3">
          <router-link to="/register">
            <v-btn color="primary" size="x-large"> Get started </v-btn>
          </router-link>
        </div>
      </div>
      <v-img src="/hero.svg" rounded="lg" width="350" v-if="mdAndUp"> </v-img>
    </div>
    <div class="space-y-2 my-4"></div>
    <div class="flex justify-center h-full gap-2 items-start">
      <div class="bg-primary/50 p-10 rounded-lg w-full">
        <v-img src="/in-app.webp" rounded="lg" class="w-full"> </v-img>
      </div>
    </div>
  </div>
</template>
