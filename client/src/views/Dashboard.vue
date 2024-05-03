<script setup>
import debounce from 'lodash.debounce'
import { watch, onMounted, ref } from 'vue';
import { toastError } from "../composables/helper";
import axiosInstance from "../composables/axios";
import SurveyCard from '../components/SurveyCard.vue';
import { useRoute, useRouter } from 'vue-router';
import { useSurveySearch } from "../stores/surveySearch.js"
import { storeToRefs } from "pinia";
import { Icon } from '@iconify/vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { mdAndUp } = useDisplay();
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
  <div class="flex justify-between items-center my-5">
    <h1>Your surveys</h1>
    <div class="w-1/3 flex justify-end" >
      <v-text-field v-if="mdAndUp" v-model="searchWord" clearable="" color="primary" rounded placeholder="Search"
        hide-details density="compact">
        <template #append-inner>
          <Icon icon="ph:magnifying-glass" width="25"></Icon>
        </template>
      </v-text-field>
      <v-dialog v-if="!mdAndUp">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text" icon size="small" rounded="lg">
            <Icon icon="ph:magnifying-glass" width="25"></Icon>
          </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-card-title> Search for survey </v-card-title>
            <v-card-text>
              <v-text-field clearable v-model="searchWord" variant="outlined" color="primary" rounded placeholder="Search"
                hide-details density="compact">
                <template #append-inner>
                  <Icon icon="ph:magnifying-glass" width="25"></Icon>
                </template>
              </v-text-field>
              <div class="flex mt-2 justify-end justify-self-end gap-2">
                <v-btn color="primary" @click="() => {
                  searchWord = '';
                  isActive.value = false;
                }
                  " variant="outlined">
                  Cancel
                </v-btn>
                <v-btn color="primary" @click="isActive.value = false">
                  Done
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </div>
  </div>
  <v-row class="" v-if="loading">
    <v-col cols="12" md="4" v-for="i in 9">
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </v-col>
  </v-row>
  <v-row class="" v-else>
    <v-col cols="12" md="4" v-for="survey in surveys.results" :key="survey._id">
      <SurveyCard :title="survey.title" :responses-count="survey.responsesCount" :is-closed="survey.isClosed"
        :created-at="survey.createdAt" :id="survey._id" />
    </v-col>
  </v-row>
  <v-pagination v-if="!loading" class="mt-10" v-model="page" color="primary"
    @update:model-value="router.replace({ query: { page: page } })" :length="surveys.totalPages"
    rounded="large"></v-pagination>
</template>

