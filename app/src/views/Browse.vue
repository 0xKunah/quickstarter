<template>
  <div>
    <left-bar/>
    <v-text-field
      outlined
      label="Search a template"
      prepend-inner-icon="mdi-magnify"
      @change="this.editUser"
    ></v-text-field>
    <v-divider></v-divider>
    <v-card
      elevation="2"
      hover
      link="/templates/react"
    >
      <v-card-title>Test</v-card-title>
    </v-card>
  </div>
</template>

<script>
//import axios from 'axios'
import LeftBar from '../components/LeftBar.vue';
//import { API_URL } from '../config';

export default {
  data () {
    return {
      
    }
  },
  async created (){
  },
  methods: {
    editUser(){
      console.log('ok')
    }
  },
  components: { LeftBar },
}
</script>
