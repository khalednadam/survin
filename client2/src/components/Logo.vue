<script setup>
import { computed } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const theme = useTheme();
const logo = computed(() => {
  if (theme.global.name.value === "dark") return "/black-logo.svg";
  else return "/colored-logo.svg";
});
</script>
<template>
  <router-link to="/">
    <v-img :src="logo" :width="50" class="mx-2"> </v-img>
  </router-link>
</template>
