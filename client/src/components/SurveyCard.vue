<script setup>
import { Icon } from '@iconify/vue';
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue';
import axiosInstance from '../composables/axios';
import { useRouter } from 'vue-router';
import DeleteModal from "../components/Modals/DeleteModal.vue"
import { toastError } from '../composables/helper';
import { useToast } from 'vue-toastification';

const props = defineProps({
  id: String,
  title: String,
  responsesCount: Number,
  createdAt: String,
  isClosed: Boolean
})

const router = useRouter();
const toast = useToast()

const fullDateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
const link = ref(`${import.meta.env.VITE_BASE_URL}/survey/${props.id}`);
const { text, copy, copied, isSupported } = useClipboard({ link });

const loading = ref(false);
const deleteDialog = ref(false);

const toggleClosed = async () => {
  loading.value = true;
  try {
    await axiosInstance.put(`/survey/${props.id}`, {
      isClosed: !props.isClosed
    });
    router.go("/");
  } catch (err) {
  } finally {
    loading.value = false;
  }
}

const deleteSurvey = async () => {
  loading.value = true;
  try {
    await axiosInstance.delete(`/survey/${props.id}`);
    router.go("/");
  } catch (err) {
    toast.error("An error occurred");
  } finally {
    loading.value = false;
  }
}

</script>

<template>
  <v-card>
    <v-card-title>
      <div class="flex justify-between items-center">
        <p>
          {{ title }}
          <span v-if="isClosed" class="opacity-60 font-bold ml-2">
            - Closed -
          </span>
        </p>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" size="x-small" icon variant="text">
              <Icon icon="ph:dots-three-outline-fill" width="20" />
            </v-btn>
          </template>
          <v-list>
            <v-list-item density="compact" @click="toggleClosed">
              <template #prepend>
                <Icon icon="ph:x" width="20" />
              </template>
              {{ isClosed ? 'Re-open' : 'Close' }}
            </v-list-item>
            <v-list-item base-color="error" density="compact" @click="() => deleteDialog = true">
              <template #prepend>
                <Icon icon="ph:trash" width="20" />
              </template>
              Delete
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-title>
    <v-card-text>
      <p>
        {{ responsesCount }} {{ responsesCount === 1 ? 'response' : 'responses' }}
      </p>
      <p>
        created at:
        {{ new Date(createdAt).toLocaleString("en-GB", fullDateOptions) }}
      </p>
      <div class="flex mt-5 items-end justify-end gap-2">
        <router-link :to="`/responses/${id}`">
          <v-btn color="primary" variant="outlined" @click="() => { }">
            <Icon icon="ph:info" width="20" />
            Responses
          </v-btn>
        </router-link>
        <v-btn color="primary" :disabled="isClosed" flat @click="() => copy(link)">
          <Icon :icon="copied ? 'ph:check' : 'ph:copy'" width="20" />
          {{ copied ? "Copied" : "Copy link" }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
  <v-dialog v-model="deleteDialog" width="500">
    <DeleteModal :title="`Delete survey '${title}'?`" @cancel="() => deleteDialog = false" @delete="deleteSurvey"
      text="are you sure you want to delete this survey? all responses and data related to this survey will be lost can't be retrieved again."
      action-btn-text="Delete" :is-loading="loading" />
  </v-dialog>
</template>

