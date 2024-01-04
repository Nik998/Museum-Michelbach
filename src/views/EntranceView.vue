<template>
    <app-bar :show-image="true"></app-bar>
  
    <v-row class="pa-3 bg-secondary" align="center" justify="space-between">
      <v-col cols="auto" class="align-center" v-html="$t('welcome')"></v-col>

      <v-col class="text-end align-self-center">
        <div class="d-flex flex-column align-center" @click="goForward">
          <v-icon large>mdi-door-open</v-icon>
          <div class="mt-1">{{$t('entrance')}}</div>
        </div>
      </v-col>
    </v-row>
  </template>
    
  <script>
  import AppBar from '@/components/utils/AppBar.vue'
  
  export default {
    name: 'EntranceView',
    components: {
      AppBar,
    },
    methods: {
      goForward() {
        this.$router.push('/rooms/1')
      },
    },
  }
  </script>