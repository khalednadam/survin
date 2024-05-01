<script setup>
import { PhoneInput } from '@lbgm/phone-number-input';
import '@lbgm/phone-number-input/style';
import { ref } from "vue";
const value = defineModel();
const props = defineProps({
  type: String,
  options: {
    type: Array,
    default: []
  },
  label: String,
  id: String,
  required: Boolean,
  readOnly: Boolean
})


const emailRules = ref([
  value => {
    if (value) return true

    return 'E-mail is requred.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true

    return 'E-mail must be valid.'
  },
]); 
</script>
<template>
  <v-text-field v-if="type === 'text'" v-model="value" :label="required ? label + '*' : label">
  </v-text-field>
  <v-textarea v-else-if="type === 'textarea'" v-model="value" :label="required ? label + '*' : label">
  </v-textarea>
  <v-radio-group v-model="value" :label="required ? label + '*' : label" v-else-if="type === 'radio'">
    <v-radio color="primary" v-for="option in options" :value="option" :label="option">
    </v-radio>
  </v-radio-group>
  <v-select v-model="value" v-if="type === 'dropdown'" :label="required ? label + '*' : label"
    :items="options"></v-select>
  <div v-if="type === 'rating'">
    <p class="ml-2 opacity-50">
      {{ label }}
      <span class="font-bold" v-if="required">
        *
      </span>
    </p>
    <v-rating v-model="value" active-color="primary" color="grey-lighten-1"></v-rating>
  </div>
  <v-text-field v-model="value" v-if="type === 'email'" :rules="emailRules" :label="required ? label + '*' : label"
    type="email"></v-text-field>
  <div v-if="type === 'checkbox'">
    <p class="ml-2 opacity-50">
      {{ label }}
      <span class="font-bold" v-if="required">
        *
      </span>
    </p>
    <div class="flex gap-5 items-center justify-start flex-row">
      <v-checkbox color="primary" v-for="option in options" :key="option" :label="option" :value="option" v-model="value">
      </v-checkbox>
    </div>
  </div>
  <v-text-field v-model="value" v-if="type === 'number'" type="number"
    :label="required ? label + '*' : label"></v-text-field>
  <v-date-picker v-model="value" v-if="type === 'date'" color="primary"
    :title="required ? label + '*' : label"></v-date-picker>
  <v-file-input v-model="value" v-if="type === 'file'" :label="label"></v-file-input>
  <PhoneInput @phone="(e) => value = e" id="phone" v-if="type === 'phone number'" :label="required ? label + '*' : label">
  </PhoneInput>
</template>
<style >
#phone>div>div {
  background-color: rgba(var(--v-theme-background)) !important;
}

#phone>div>label {
  font-family: "Lato", sans-serif !important;
  opacity: 0.5 !important;
  font-weight: normal !important;
}
</style>

