<template>
  <v-app>
    <v-main>
      <router-view class="pl-16 pr-2 py-2"/>
    </v-main>
  </v-app>
</template>

<style>
  html {
    overflow: hidden !important;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  html::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>

<script>
import { ipcRenderer } from './utils/electron';

export default {
  name: "App",

  data: () => {
    ipcRenderer.send("execute-command", 'a super non-working command which returns an error')
  },
};
</script>
