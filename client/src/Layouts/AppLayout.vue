<script setup>
// IMPORTS
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify";
import { Icon } from "@iconify/vue";
import { useCurrentUser } from "@/stores/auth";
import Header from "../components/Header.vue";
import LogoutBtn from "../components/LogoutBtn.vue";
// INITS
const { mdAndUp } = useDisplay();
const router = useRouter();
const authStore = useCurrentUser();

// REFS
const drawer = ref(mdAndUp.value ? true : false);
onMounted(() => {
  authStore.getUser();
});
</script>

<template>
  <div>
    <v-navigation-drawer
      :permanent="mdAndUp"
      v-model="drawer"
      location="left"
      v-if="authStore.user"
      color="base"
    >
      <template v-slot:prepend>
        <router-link to="/settings">
          <v-list-item
            link
            lines="two"
            :title="authStore.user.name"
            :subtitle="'@' + authStore.user.username"
          >
            <template #prepend>
              <v-avatar
                color="primary"
                class="ring-white ring-2 border-white border-2"
              >
                <p v-if="!authStore.user.profilePhotoUrl">
                  {{ authStore.user.name[0].toUpperCase() }}
                </p>
                <v-img :src="authStore.user.profilePhotoUrl" v-else></v-img>
              </v-avatar>
            </template>
          </v-list-item>
        </router-link>
      </template>

      <v-list class="w-11/12 mx-auto space-y-2">
        <router-link to="/settings">
          <v-list-item
            color="primary"
            title="Settings"
            :active="router.currentRoute.value.fullPath === '/settings'"
          >
            <template #prepend>
              <Icon icon="ph:gear" width="20"> </Icon>
            </template>
          </v-list-item>
        </router-link>
        <v-list-item class="flex flex-row items-center justify-between">
          <div class="flex items-center justify-between"></div>
        </v-list-item>
        <LogoutBtn />
      </v-list>
    </v-navigation-drawer>
    <Header @toggle-drawer="() => (drawer = !drawer)" :drawer="drawer" />
    <v-main>
      <!-- <v-container> -->
      <div class="mx-10">
        <slot></slot>
      </div>
      <!-- </v-container> -->
    </v-main>
  </div>
</template>
<style scoped>
:deep(.v-navigation-drawer__content) {
  scrollbar-gutter: stable;
}
</style>