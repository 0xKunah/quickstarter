<template>
    <v-navigation-drawer permanent expand-on-hover absolute>
        <v-list>
            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Quickstarter
                    </v-list-item-title>
                    <v-list-item-subtitle>v{{version}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
            <v-list-item link to="/">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/browse">
                <v-list-item-icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Browse templates</v-list-item-title>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
//import axios from 'axios';
//import { API_URL } from '../config';
import { version } from '../../package.json'

export default {
    data() {
        return {
            user: {},
            version
        }
    },
    async created() {
        
    }
}
</script>