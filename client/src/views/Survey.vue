<script setup>
import { useRoute } from "vue-router"
import axiosInstance from "../composables/axios.js";
import { onMounted, ref } from "vue";
import Field from "../components/Field.vue"
import { useCurrentUser } from "@/stores/auth";
import { Icon } from "@iconify/vue";
import { useToast } from "vue-toastification";
import { toastError } from "../composables/helper.js"


const route = useRoute();
const authStore = useCurrentUser();
const toast = useToast();

const survey = ref(null);
const loading = ref(false);
const submitting = ref(false);
const answers = ref([]);
const sentDialog = ref(false);

const getSurveyById = async () => {
  loading.value = true;
  try {
    const response = await axiosInstance.get(`survey/${route.params.surveyId}`);
    survey.value = response.data;
    answers.value = survey.value.fields.map((field) => ({ fieldId: field._id, value: [] }));
  } catch (err) {
    toastError(err);
  } finally {
    loading.value = false;
  }
}

const submit = async () => {
  submitting.value = true;
  try {
    const response = await axiosInstance.post("/response", {
      survey: survey.value.id,
      user: !!authStore.user.id ? authStore.user.id : null,
      answers: answers.value
    });
    sentDialog.value = true;
  } catch (err) {
    toast.error("Please fill all the required fields")
  } finally {
    submitting.value = false;
  }
}
onMounted(async () => {
  await getSurveyById();
  document.title = `${survey.value.title} Survey - Survin!`
})


</script>
<template>
  <v-theme-provider>
    <div v-if="survey">
      <div v-if="survey.isClosed" class="flex flex-col gap-5 justify-center items-center w-full h-[85vh] ">
        <h1 class="text-primary">
          This survey is closed
        </h1>
        <div>
          <router-link to="/">
            <v-btn color="primary" flat>
              <Icon icon="ph:house" width="20" />
              Home
            </v-btn>
          </router-link>
        </div>
      </div>
      <div :key="loading" v-else>
        <div v-if="survey && !loading" class="flex flex-col w-full">
          <h1>
            {{ survey.title }}
          </h1>
          <div class="mt-5 space-y-6">
            <template v-for="(field, i) in survey.fields" :key="field._id">
              <Field v-model="answers[i].value" :type="field.type" :id="field._id" :options="field.options"
                :label="field.label" :required="field.required" />
            </template>
          </div>
          <v-btn @click="submit" :loading="submitting" :disabled="submitting" class="flex place-self-end"
            color="primary" size="large">
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

      <v-dialog persistent v-model="sentDialog" class="md:max-w-[35vw] w-full">
        <v-card>
          <v-card-title>
            <div class="flex flex-row justify-between items-center w-full">
              <p>
              </p>
              <router-link to="/">
                <v-btn icon size="x-small" variant="text">
                  <Icon icon="ph:x" width="20" />
                </v-btn>
              </router-link>
            </div>
          </v-card-title>
          <v-card-text class="flex justify-center text-center items-center flex-col">
            <Icon icon="ph:check-circle" class="text-success" width="120" />
            Your response was sent successfully!
            <router-link to="/">
              <v-btn color="primary" variant="flat" class="mt-10">
                Close
              </v-btn>
            </router-link>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-theme-provider>
</template>
