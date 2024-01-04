<template>
  <AppBar />

  <v-container class="main-container" :fluid="true">
    <v-card class="mb-4 pt-2 pb-4 bg-secondary">
      <v-card-title class="font-weight-medium bg-secondary">Hörbeispiele</v-card-title>
      <v-card-subtitle>Bitte wählen Sie einen Raum</v-card-subtitle>
    </v-card>

    <v-row>
      <v-col v-for="item in rooms" :key="item.id" cols="12" sm="12" md="6" lg="6" xl="4" xxl="3">
        <CardRooms :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppBar from "@/components/utils/AppBar.vue"
import CardRooms from "@/components/utils/CardRooms.vue"
import { Room } from "@/main.js";

export default {
  components: {
    AppBar,
    CardRooms,
  },
  data() {
    return {
      rooms: [
        new Room("Raum 1", "Raum 1", "Das ist eine Kurzbeschreibung", "Das ist eine ausführliche Beschreibung", "https://www.frankonzept.de/wp-content/uploads/2021/03/W5D3106.jpg"),
      ]
    }
  }
}
</script>
