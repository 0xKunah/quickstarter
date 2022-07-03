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
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
