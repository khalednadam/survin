<script setup>
import { Icon } from "@iconify/vue";
import { useDisplay, useTheme } from "vuetify";
import ModeSwitcher from "../components/ModeSwitcher.vue";
import UserAvatar from "./UserAvatar.vue";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";
import { useSurveySearch } from "../stores/surveySearch.js"
import { storeToRefs } from "pinia";
import LogoutBtn from "./LogoutBtn.vue";
const surveySearch = useSurveySearch();
const { searchWord } = storeToRefs(surveySearch);

const { mdAndUp, smAndDown } = useDisplay();
const route = useRoute();
const props = defineProps({
  drawer: Boolean,
  user: Object
});
const emits = defineEmits(["toggleDrawer"]);
const theme = useTheme();

const colors = [
  "#213BAA",
  "#7469B6",
  "#7ABA78",
  "#FA7070",
  "#FF8A08",
  "#D862BC"
]

const changePrimary = (color) => {
  theme.themes.value.light.colors.primary = color;
  theme.themes.value.dark.colors.primary = color;
  localStorage.setItem("primary-color", color);
}
</script>

<template>
  <v-app-bar elevation="0" density="compact">
    <v-row no-gutters class="items-center my-auto px-5 !py-0 !m-0">
      <!-- <v-col cols="5" class=""> -->
      <!--   <div class="flex items-center"> -->
      <!--     <v-btn v-if="smAndDown" variant="text" icon rounded="lg" @click="$emit('toggleDrawer')"> -->
      <!--       <Icon icon="ph:list" width="35"></Icon> -->
      <!--     </v-btn> -->
      <!--     <router-link to="/create-survey" v-if="!mdAndUp"> -->
      <!--       <v-btn color="primary" icon size="x-small" variant="flat" @click="() => { }"> -->
      <!--         <Icon icon="ph:plus-bold" width="20"></Icon> -->
      <!--       </v-btn> -->
      <!--     </router-link> -->
      <!--   </div> -->
      <!-- </v-col> -->
      <v-col cols="10" class="flex flex-col justify-center">
        <div class="md:space-x-5 space-x-2 px-2 flex items-center">
          <v-menu v-if="mdAndUp">
            <template v-slot:activator="{ props }">
              <UserAvatar v-bind="props" :user="user" v-if="user" />
            </template>
            <v-list density="compact">
              <LogoutBtn />
            </v-list>
          </v-menu>
          <div v-if="mdAndUp" class="flex items-center gap-2">
            <router-link to="/">
              <v-btn :variant="route.path === '/' ? 'tonal' : 'text'" color="primary">
                Home
              </v-btn>
            </router-link>
            <router-link to="/settings">
              <v-btn :variant="route.path === '/settings' ? 'tonal' : 'text'" color="primary">
                Settings
              </v-btn>
            </router-link>
          </div>
          <v-btn v-if="smAndDown" variant="text" icon rounded="lg" @click="$emit('toggleDrawer')">
            <Icon icon="ph:list" width="35"></Icon>
          </v-btn>
          <router-link to="/create-survey">
            <v-btn color="primary" icon size="x-small" variant="flat" @click="() => { }">
              <Icon icon="ph:plus-bold" width="20"></Icon>
            </v-btn>
          </router-link>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="flex justify-end items-center">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text" icon color="primary">
                <Icon icon="ph:swatches" width="30" />
              </v-btn>
            </template>
            <v-list>
              <v-btn v-for="color in colors" icon size="x-small" variant="text" rounded="full"
                @click="() => changePrimary(color)">
                <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: color }">
                </div>
              </v-btn>
            </v-list>
          </v-menu>
          <ModeSwitcher />
          <Logo />
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
