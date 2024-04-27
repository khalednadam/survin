<script setup>
import { useRoute } from "vue-router"
import axiosInstance from "../composables/axios.js";
import { onMounted, ref, watch } from "vue";
import Field from "../components/Field.vue"

const route = useRoute();

const survey = ref(null);
const loading = ref(false);


const getSurveyById = async () => {
  loading.value = true;
  try {
    const response = await axiosInstance.get(`survey/${route.params.surveyId}`);
    console.log(response);
    survey.value = response.data;
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await getSurveyById();
})

watch(loading, () => {
  console.log(loading.value);
})
</script>
<template>
  <div :key="loading">
    <div v-if="survey && !loading" class="flex flex-col w-full">
      <h1>
        {{ survey.title }}
      </h1>
      <div class="mt-5 space-y-6">
        <template v-for="field in survey.fields" :key="field">
          <Field :type="field.type" :id="field._id" :options="field.options" :label="field.label" />
        </template>
      </div>
      <v-btn class="flex place-self-end" color="primary" size="large">
        Submit
      </v-btn>
    </div>
    <div v-if-else="loading" class="w-full flex max-h-[80vh] justify-center items-center">
      <v-progress-circular v-if="loading" color="primary" indeterminate="disable-shrink" size="100"
        width="2"></v-progress-circular>
    </div>
    <div v-if="!survey && !loading">
      Error...
    </div>
  </div>
</template>


