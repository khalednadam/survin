<script setup>
import { computed } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const theme = useTheme();
const logo = computed(() => {
  if (theme.global.name.value === "dark") return "/logo.svg";
  else return "/logo.svg";
});
</script>
<template>
  <router-link to="/">
    <div class="bg-primary rounded-lg w-[40px] h-[40px] flex justify-center items-center">
      <v-img :src="logo" class="w-[30px] h-[30px]"> </v-img>
    </div>
  </router-link>
</template>
