<script setup>
import debounce from 'lodash.debounce'
import { watch, onMounted, ref } from 'vue';
import { toastError } from "../composables/helper";
import axiosInstance from "../composables/axios";
import SurveyCard from '../components/SurveyCard.vue';
import { useRoute, useRouter } from 'vue-router';
import { useSurveySearch } from "../stores/surveySearch.js"
import { storeToRefs } from "pinia";

const surveySearch = useSurveySearch();
const { searchWord } = storeToRefs(surveySearch);
const route = useRoute();
const router = useRouter();
const page = ref(Number(route.query.page) || 1)
const surveys = ref([]);
const loading = ref(false);
const getSurveys = async () => {
  loading.value = true;
  try {
    const response = await axiosInstance.get('/survey/my-surveys', {
      params: {
        title: searchWord.value || "",
        limit: 9,
        sortBy: "createdAt:desc",
        page: page.value
      },
    });
    surveys.value = response.data;
    console.log(response.data);
  } catch (err) {
    toastError(err);
  } finally {
    loading.value = false;
  }
}
onMounted(async () => {
  await getSurveys();
})
watch(searchWord, debounce(() => {
  getSurveys();
}, 500))
</script>
<template>
  <h1>Your surveys</h1>
  <v-row class="mt-8" v-if="loading">
    <v-col cols="12" md="4" v-for="i in 9">
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </v-col>
  </v-row>
  <v-row class="mt-8" v-else>
    <v-col cols="12" md="4" v-for="survey in surveys.results" :key="survey._id">
      <SurveyCard :title="survey.title" :fields-count="survey.fields.length" :created-at="survey.createdAt"
        :id="survey._id" />
    </v-col>
  </v-row>

  <v-pagination v-if="!loading" class="mt-20" v-model="page" color="primary"
    @update:model-value="router.replace({ query: { page: page } })" :length="surveys.totalPages"
    rounded="large"></v-pagination>
</template>

