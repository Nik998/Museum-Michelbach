<template>
  <app-bar :show-image="false"></app-bar>

    <v-img :src="imgRoom" style="height: 100%;" cover></v-img>

  <div class="d-flex pa-3 bg-secondary">
    <v-btn @click="prevRoom">{{ $t('roomPrev') }}</v-btn>
    <v-btn class="ml-auto" @click="nextRoom">{{ $t('roomNext') }}</v-btn>
  </div>
</template>
    
<script>
import AppBar from '@/components/utils/AppBar.vue'

import imgRoom from '@/assets/rooms/room1/room1.jpeg';

export default {
  data() {
    return {
      imgRoom,
    }
  },
  components: {
    AppBar,
  },
  methods: {
    prevRoom() {
      this.$router.push({ name: 'Entrance' })
    },
    nextRoom() {
      this.$router.push({ name: 'Room2' })
    },
  }
}
</script>