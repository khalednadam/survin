<script setup>

</script>
<template>
  <v-app-bar :elevation="scrolledDown ? 2 : 0" density="default" class="transition-all duration-200"
    transition="fade-transition" :color="scrolledDown ? 'white' : 'white'">
    <v-container>
      <div class="flex w-full justify-between items-center">
        <div class="flex items-center justify-start gap-10">
          <router-link to="/">
            <v-img :width="50" class="" src="/colored-logo.svg"> </v-img>
          </router-link>
        </div>
      </div>
    </v-container>
  </v-app-bar>
  <v-container>
    <v-main theme>
      <slot></slot>
    </v-main>
  </v-container>
</template>
