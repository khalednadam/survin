import { ref } from "vue";
import { defineStore } from "pinia";

export const useSurveySearch = defineStore("surveySearch", () => {
  const searchWord = ref("");
  return { searchWord }
})

