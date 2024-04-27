<script setup>
const model = defineModel();
const props = defineProps({
  type: String,
  options: {
    type: Array,
    default: []
  },
  label: String,
  id: String
})

</script>
<template>
  <v-text-field v-if="type === 'text'" v-model="model" :label="label">
  </v-text-field>
  <v-textarea v-else-if="type === 'textarea'" v-model="model" :label="label">
  </v-textarea>
  <v-radio-group :label="label" v-else-if="type === 'radio'">
    <v-radio v-for="option in options" :value="option" :label="option">
    </v-radio>
  </v-radio-group>
  <v-select v-if="type === 'dropdown'" :label="label" :items="options"></v-select>
  <div v-if="type === 'rating'">
    <p class="ml-2 opacity-50">
      {{ label }}
    </p>
    <v-rating :label="label" active-color="primary" color="grey-lighten-1"></v-rating>
  </div>
  <v-text-field v-if="type === 'email'" :label="label" type="email"></v-text-field>
  <div v-if="type === 'checkbox'">
    <p class="ml-2 opacity-50">
      {{ label }}
    </p>
    <div class="flex gap-5 items-center justify-start flex-row">
      <v-checkbox v-for="option in options" :key="option" :label="option">
      </v-checkbox>
    </div>
  </div>
  <v-text-field v-if="type === 'number'" type="number" :label="label"></v-text-field>
  <v-date-picker v-if="type === 'date'" color="primary" :title="label"></v-date-picker>
  <v-file-input v-if="type === 'file'" :label="label"></v-file-input>
</template>
