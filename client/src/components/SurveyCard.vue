<script setup>
import { Icon } from '@iconify/vue';
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue';

const props = defineProps({
  id: String,
  title: String,
  fieldsCount: Number,
  createdAt: String
})
const fullDateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
const link = ref(`${import.meta.env.VITE_BASE_URL}/survey/${props.id}`);
const { text, copy, copied, isSupported } = useClipboard({ link });
</script>

<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <p>
        {{ fieldsCount }} fields
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
        <v-btn color="primary" flat @click="() => copy(link)">
          <Icon :icon="copied ? 'ph:check' : 'ph:copy'" width="20" />
          {{ copied ? "Copied" : "Copy link" }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

