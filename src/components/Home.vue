<template>
  <AppBar/>

  <v-container class="main-container">
    <v-card class="mb-4 pt-2 pb-4 bg-secondary">
      <v-card-title class="font-weight-medium bg-secondary">Hörbeispiele</v-card-title>
      <v-card-subtitle>Bitte wählen Sie einen Raum</v-card-subtitle>
    </v-card>

    <v-col v-for="item in rooms"
           :key="item.id"
           sm="12"
           md="6"
           lg="6"
           xl="4"
           xxl="3">
      <CardRooms :item="item"/>
    </v-col>
  </v-container>
</template>

<script>
import AppBar from "@/components/utils/AppBar.vue"
import CardRooms from "@/components/utils/CardRooms.vue"
import {Room} from "@/main.js";

export default {
  components: {
    AppBar,
    CardRooms,
  },
  data() {
    return {
      rooms: [
        new Room("Raum 1", "Raum 1", "Das ist eine Kurzbeschreibung", "Das ist eine ausführliche Beschreibung"),
      ]
    }
  }
}
</script>
