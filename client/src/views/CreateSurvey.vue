<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import axiosInstance from '../composables/axios';
import { useClipboard } from '@vueuse/core'
import ConfettiExplosion from "vue-confetti-explosion";
import { toastError } from "../composables/helper";

const surveyTitle = ref();
const fields = ref([]);
const selectedField = ref(null);
const toast = useToast();

const currentFieldCount = ref(0);
const surveyId = ref("");
const successDialog = ref(false);
const link = ref("");
const { text, copy, copied, isSupported } = useClipboard({ link })

const addField = () => {
  currentFieldCount.value++;
  fields.value.push({ order: currentFieldCount.value, label: "", type: "", options: [] })
}

const selectField = (order) => {
  selectedField.value = order;
}

const deleteField = () => {
  fields.value = fields.value.filter((field) => selectedField.value !== field.order)
  selectField(null);
}

const createSurvey = async () => {
  try {
    const response = await axiosInstance.post('/survey/', {
      title: surveyTitle.value,
      fields: fields.value
    });
    surveyId.value = response.data._id;
    successDialog.value = true;
    link.value = `${import.meta.env.VITE_BASE_URL}/survey/${surveyId.value}`
  } catch (err) {
    console.log(err);
    toast.error('Please fill all the fields')
  }
}

</script>
<template>
  <div class="mt-5">
    <v-row class="">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            Your new survey
          </v-card-title>
          <v-card-text class="mt-2">
            <v-text-field v-model="surveyTitle" label="Survey Title">
            </v-text-field>
            <div class="my-2" v-click-outside="() => { }">
              <p>
                Fields
              </p>
              <template v-for="field in fields" :key="field.order">
                <v-card :variant="selectedField === field.order ? 'flat' : 'outlined'" color="primary" class="my-1"
                  @click="() => selectField(field.order)">
                  <v-card-text>
                    <h3 :class="field.label.length <= 0 ? 'opacity-50' : 'opacity-100'">
                      {{ field.label.length > 0 ? field.label : "No Label" }}
                    </h3>
                    <p>
                      type: {{ field.type }}
                    </p>
                    <div v-if="field.options.length > 0">
                      Options:
                      <ul class="ml-10">
                        <li class="list-disc" v-for="option in field.options">
                          {{ option }}
                        </li>
                      </ul>
                    </div>
                  </v-card-text>
                </v-card>
              </template>
            </div>
            <v-btn color="primary" variant="tonal" @click="addField">
              <Icon icon="ph:plus"></Icon>
              Add a field
            </v-btn>
            <div class="w-full flex justify-end">
              <v-btn color="primary" variant="flat" @click="createSurvey" :disabled="fields.length === 0">
                Create
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>
            Options
          </v-card-title>
          <v-card-text>
            <div v-if="selectedField">
              <v-text-field label="Label" v-model="fields.find(field => field.order === selectedField).label">
              </v-text-field>
              <v-select label="Type" :items="['text', 'textarea', 'radio', 'checkbox', 'dropdown', 'rating', 'date'
                , 'file', 'email', 'number', 'phone number']"
                v-model="fields.find(field => field.order === selectedField).type">
              </v-select>
              <div
                v-if="fields.find(field => field.order === selectedField).type === 'radio' || fields.find(field => field.order === selectedField).type === 'checkbox' || fields.find(field => field.order === selectedField).type === 'dropdown'">
                <p class="my-2">
                  Options
                </p>
                <template v-for="(option, i) in fields.find(field => field.order === selectedField).options">
                  <v-text-field label="option" v-model="fields.find(field => field.order === selectedField).options[i]">
                  </v-text-field>
                </template>
                <v-btn
                  :disabled="fields.find(field => field.order === selectedField).options[fields.find(field => field.order === selectedField).options?.length - 1]?.length < 0"
                  color="primary" @click="() => fields.find(field => field.order === selectedField).options.push('')"
                  variant="tonal">
                  Add option
                </v-btn>
              </div>
              <div class="flex space-x-1">
                <v-btn color="primary" flat class="mt-5" @click="() => selectField(null)">
                  Done
                </v-btn>
                <v-btn color="error" flat class="mt-5" @click="deleteField">
                  Delete
                </v-btn>
              </div>
            </div>
            <div class="h-[300px] flex flex-col justify-center items-center" v-else>
              <p>
                Select a field to preview its options
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <v-dialog persistent v-model="successDialog" class="md:max-w-[35vw] w-full">

    <ConfettiExplosion />
    <v-card>
      <v-card-title>
        <div class="flex flex-row justify-between items-center w-full">
          <p>
            Your survey is ready
          </p>
          <router-link to="/">
            <v-btn icon size="x-small" variant="text">
              <Icon icon="ph:x" width="20" />
            </v-btn>
          </router-link>
        </div>
      </v-card-title>
      <v-card-text>
        You can share it with whoever you want :)
        <v-text-field readonly v-model="link">
          <template #append>
            <v-btn size="large" flat color="primary" @click="copy(link)">
              {{ copied ? 'Copied' : 'Copy' }}
            </v-btn>
          </template>
        </v-text-field>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
