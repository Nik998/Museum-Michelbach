<template>
  <v-card style="height: 100%;">
    <v-img :src="item.image"
           height="300px"
           :cover="true"/>

    <v-card-title class="text-h5">{{ item.title }}</v-card-title>
    <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>

    <VuetifyAudio
      :file="item.audioFile"
      color="secondary"
      :flat="true"
    />
  </v-card>
</template>

<script>
import VuetifyAudio from 'vuetify-audio';

export default {
  components: {
    VuetifyAudio,
  },
  props: {
    item: Object
  },
}
</script>


<style scoped>

</style>
