<script setup>
import Step from '../../components/Landing/Step.vue';

const steps = [
  "Create an account",
  "Add a survey and copy the link",
  "Share it with anyone",
  "See who responded",
]

</script>
<template>
  <div class="text-center">
    <div class="my-5">
      <h2 class="text-center text-3xl">
        We handle surveys <span class="text-primary">efficiently</span> for you
      </h2>
      <p>
        We make creating, sharing and managing surveys much easier
      </p>
    </div>
  </div>
  <v-row>
    <v-col cols="12" md="3" v-for="(step, i) in steps">
      <Step :number="i + 1" :text="step" />
    </v-col>
  </v-row>
</template>


