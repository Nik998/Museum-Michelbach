<template>
  <v-card @click="onClick">
    <v-img src="https://www.frankonzept.de/wp-content/uploads/2021/03/W5D3106.jpg"
           max-height="300px"
           :cover=true />

    <v-card-title class="text-h5">{{ item.title }}</v-card-title>
    <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>

    <v-card-text>
      {{ item.text }}
    </v-card-text>
  </v-card>
</template>

<script>
import {Room} from "@/main.js"

export default {
  props: {
    item: Room
  },
  methods: {
    onClick() {
      this.$router.push({ path: "/rooms/" + this.item.id });

    }
  },
}
</script>

<style scoped>

</style>
