<script setup>
import { RouterView } from "vue-router";
import { useTheme } from "vuetify";

const theme = useTheme();
</script>

<template>
  <v-app
    :theme="$route.meta.layout?.__name === 'LandingLayout' || $route.meta.layout?.__name === 'SurveyLayout' ? 'light' : theme.current.value">
    <component :is="$route.meta.layout || 'div'">
      <RouterView :key="$route.fullPath" />
    </component>
  </v-app>
</template>
