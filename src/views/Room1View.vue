<template>
  <app-bar :show-image="false"></app-bar>

  <div style="position: relative; height: 100%;">
    <v-img cover :src="imgRoom" style="height: 100%;"></v-img>

    <div style="position:absolute; left: "></div>

    <v-btn icon style="position: absolute; bottom: 10px; right: 15px;" @click="openDialogAudio=true">
      <v-icon>mdi-headphones</v-icon>
    </v-btn>
  </div>

  <div class="d-flex pa-3 bg-secondary">
    <v-btn @click="prevRoom">{{ $t('roomPrev') }}</v-btn>
    <v-btn class="ml-auto" @click="nextRoom">{{ $t('roomNext') }}</v-btn>
  </div>

  <v-dialog v-model="openDialogAudio">
    <v-card>
      <v-card-title>{{  $t('audio10Title') }}</v-card-title>
      <v-card-text>
        <vuetify-audio flat :file="currentAudio" controls></vuetify-audio>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="openDialogAudio=false">{{ $t('close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
    
<script>
import AppBar from '@/components/utils/AppBar.vue'
import VuetifyAudio from 'vuetify-audio';

import imgRoom from '@/assets/rooms/room1/room1.jpeg';
import audioRoomDe from '@/assets/rooms/room1/room1-01-de.mp3';
import audioRoomEn from '@/assets/rooms/room1/room1-01-en.mp3';

export default {
  data() {
    return {
      imgRoom,
      audioRoomDe,
      audioRoomEn,
      openDialogAudio: false,
    }
  },
  computed: {
    currentAudio() {
      return this.$i18n.locale === 'de' ? this.audioRoomDe : this.audioRoomEn;
    }
  },
  components: {
    AppBar,
    VuetifyAudio,
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