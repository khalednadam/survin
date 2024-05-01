<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axiosInstance from '../composables/axios';
import { onMounted } from 'vue';
import { watch } from 'vue';
import { Field } from 'vee-validate';
import { Icon } from '@iconify/vue';

const route = useRoute();
const router = useRouter();
const fullDateOptions = {
  hour: '2-digit',
  minute: '2-digit',
  day: '2-digit',
  month: 'short',
  year: 'numeric'
};

const dateOpt = {
  day: '2-digit',
  month: 'short',
  year: 'numeric'
};

const responses = ref([]);
const loading = ref(false);
const surveyId = ref(route.params.surveyId);
const loadingResponse = ref(false);
const response = ref("");
const selectedResponse = ref(route.query.response);
const survey = ref("");

const getSurveyResponses = async () => {
  loading.value = true;
  console.log("get survey responses")
  try {
    const response = await axiosInstance.get(`/response/of/${surveyId.value}`, {
      params: {
        sortBy: "createdAt:desc"
      }
    });
    responses.value = response.data.results;
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
}

const getResponseById = async () => {
  loadingResponse.value = true;
  try {
    const apiResponse = await axiosInstance.get(`/response/${selectedResponse.value}`);
    response.value = apiResponse.data;
  } catch (err) {
    console.log(err);
  } finally {
    loadingResponse.value = false;
  }
}

const getSurveyById = async () => {
  loading.value = true;
  try {
    const response = await axiosInstance.get(`survey/${route.params.surveyId}`);
    survey.value = response.data;
    console.log(answers.value);
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false;
  }
}


const selectResponse = (res) => {
  window.history.replaceState(null, '', `?response=${res}`)
  selectedResponse.value = res;
}

onMounted(async () => {
  await getSurveyById();
  await getSurveyResponses();
})

watch(selectedResponse, () => {
  getResponseById();
}, { deep: true, immediate: true, })

const goBack = () => router.go(-1);
</script>
<template>
  <div>
    <div class="flex justify-start items-center gap-5 mt-5">
      <v-btn @click="goBack" icon variant="tonal" size="small" color="primary" class="">
        <Icon icon="ph:caret-left" class="text-primary" width="25" />
      </v-btn>
      <h1 class="font-normal">
        Responses of
        <span class="font-bold">
          "{{ survey.title }}"
        </span>
      </h1>
    </div>
    <v-row class="mt-5">
      <v-col cols="0" md="4">
        <v-card>
          <v-card-text>
            <v-virtual-scroll class="max-h-[70vh]" :items="responses">
              <template v-slot:default="{ item }">
                <v-list-item :key="route.query.response" @click="() => selectResponse(item.id)" color="primary"
                  :active="selectedResponse === item.id">
                  Response on {{ new Date(item.createdAt).toLocaleString("en-US", fullDateOptions) }}
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-text>
            <template v-for="(field, i) in survey.fields">
              <div class="my-5">
                <p class="opacity-50 ml-2">
                  {{ field.label }}
                  <span class="font-bold" v-if="field.required">
                    *
                  </span>
                </p>
                <p v-if="field.type === 'date'" class="ml-2">
                  {{ new Date(response.answers[i].value).toLocaleString("en-NZ", dateOpt) }}
                </p>
                <div v-else-if="field.type === 'rating'">
                  <v-rating readonly v-model="response.answers[i].value" active-color="primary"
                    color="grey-lighten-1"></v-rating>
                </div>
                <div v-else-if="field.type === 'checkbox'" class="ml-2">
                  <span v-for="opt in response.answers[i].value">
                    {{ opt }},
                  </span>
                </div>
                <p v-else class="ml-2">
                  {{ response.answers[i].value }}
                </p>
              </div>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


