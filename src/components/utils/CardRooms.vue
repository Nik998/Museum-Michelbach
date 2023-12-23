<template>
  <v-card style="height: 100%;"
          @click="onClick">
    <v-img :src="item.image"
           height="300px"
           :cover="true"/>

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
      this.$router.push({path: "/rooms/" + this.item.id});

    }
  },
}
</script>

<style scoped>

</style>
