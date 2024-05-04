<script setup>
import { Icon } from "@iconify/vue";
import { useDisplay } from "vuetify";
import ModeSwitcher from "../../components/ModeSwitcher.vue";
import { useRoute } from "vue-router";
import Logo from "../Logo.vue";
import ColorChanger from "../ColorChanger.vue";
import UserAvatar from "../UserAvatar.vue";
import LogoutBtn from "../LogoutBtn.vue";

const { mdAndUp, smAndDown } = useDisplay();
const route = useRoute();
const props = defineProps({
  drawer: Boolean,
  user: Object
});
const emits = defineEmits(["toggleDrawer"]);

</script>

<template>
  <!-- <div
		class="h-[65px] items-end my-auto py-1 w-full mb-[100px] top-0 dark:bg-dark-background bg-light-background"
	> -->
  <v-app-bar elevation="0" density="compact">
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
          <router-link to="/admin">
            <v-btn :variant="route.path === '/admin' ? 'tonal' : 'text'" color="primary">
              Home
            </v-btn>
          </router-link>
          <router-link to="/admin/settings">
            <v-btn :variant="route.path === '/admin/settings' ? 'tonal' : 'text'" color="primary">
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
        <ColorChanger />
        <ModeSwitcher />
        <Logo />
      </div>
    </v-col>
    <!-- <v-row no-gutters class="items-center my-auto  px-5 !py-0 !m-0"> -->
    <!--   <v-col cols="5" class=""> -->
    <!--   </v-col> -->
    <!--   <v-col cols="5" class="flex flex-col justify-center "> -->
    <!--     <div class="md:space-x-5 space-x-2 px-2 flex items-center"> -->
    <!--     </div> -->
    <!--   </v-col> -->
    <!--   <v-col cols="2"> -->
    <!--     <div class="flex justify-end items-center"> -->
    <!--       <ColorChanger /> -->
    <!--       <ModeSwitcher /> -->
    <!--       <Logo /> -->
    <!--     </div> -->
    <!--   </v-col> -->
    <!-- </v-row> -->
  </v-app-bar>
</template>

