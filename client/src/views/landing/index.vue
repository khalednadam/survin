<script setup>
import { useDisplay } from "vuetify";
import { AutoTyperVue } from "auto-typer-vue3";
import WhatIsSurvin from "./WhatIsSurvin.vue";
const { mdAndUp } = useDisplay();
let text = [
  'easier.',
  'simpler.',
  'faster.'
];
</script>
<template>
  <div>
    <div class="h-[60vh] w-full bg-primary flex md:flex-row rounded-lg justify-between items-center">
      <v-row class="">
        <v-col cols="12">
          <div class="w-full flex items-center gap-5 justify-center flex-col">
            <h1 class="md:text-5xl text-3xl md:max-w-[90%] font-normal text-white text-center md:text-start">
              Surveys made
              <br v-if="!mdAndUp">
              <AutoTyperVue componentTag="span" class="font-bold" :text="text" />
            </h1>
            <div class="mt-3">
              <router-link to="/register">
                <v-btn color="white" size="x-large" variant="tonal"> Get started </v-btn>
              </router-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="flex justify-center -mt-20 w-10/12 self-center justify-self-center mx-auto  h-full gap-2 items-start">
      <div class="bg-white p-10 rounded-lg w-full ">
        <v-img src="/inapp.webp" rounded="lg" class="w-full"> </v-img>
      </div>
    </div>
    <div class="mt-10">
      <WhatIsSurvin />
    </div>
  </div>
</template>
<style scoped>
@import "auto-typer-vue3/dist/style.css";
</style>
