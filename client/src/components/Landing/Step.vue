<script setup>
defineProps({
  number: Number,
  text: String
})
</script>
<template>
  <v-card variant="tonal" color="primary" height="200">
    <p class="absolute text-[10rem] font-bold opacity-10 text-primary -top-14 right-0">
      {{ number }}
    </p>
    <v-card-text class="absolute bottom-10 font-bold">
      <p class="font-bold text-xl">
        {{ text }}
      </p>
    </v-card-text>
  </v-card>
</template>
