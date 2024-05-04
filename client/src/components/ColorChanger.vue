<script setup>
import { Icon } from '@iconify/vue';
import { useTheme } from 'vuetify/lib/framework.mjs';


const theme = useTheme();
const colors = [
  "#213BAA",
  "#7469B6",
  "#7ABA78",
  "#FA7070",
  "#FF8A08",
  "#D862BC"
]

const changePrimary = (color) => {
  theme.themes.value.light.colors.primary = color;
  theme.themes.value.dark.colors.primary = color;
  localStorage.setItem("primary-color", color);
}
</script>
<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" variant="text" icon color="primary">
        <Icon icon="ph:swatches" width="30" />
      </v-btn>
    </template>
    <v-list>
      <v-btn v-for="color in colors" icon size="x-small" variant="text" rounded="full"
        @click="() => changePrimary(color)">
        <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: color }">
        </div>
      </v-btn>
    </v-list>
  </v-menu>
</template>
