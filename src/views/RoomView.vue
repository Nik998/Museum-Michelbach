<template>
  <AppBar/>

  <v-container class="main-container"
               :fluid="true">
    <v-card class="mb-4 pt-2 pb-4 bg-secondary">
      <v-card-title class="font-weight-medium bg-secondary">{{ this.$route.params.id }}</v-card-title>
      <v-card-subtitle>Hier können Sie sich die Hörbeispiele anhören</v-card-subtitle>
    </v-card>

    <v-row>
      <v-col v-for="item in filteredItems"
             :key="item.id"
             cols="12"
             sm="12"
             md="6"
             lg="6"
             xl="4"
             xxl="3">
        <CardAudio :item="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppBar from "@/components/utils/AppBar.vue";
import CardAudio from "@/components/utils/CardAudio.vue";

export default {
  components: {
    AppBar,
    CardAudio
  },
  props: {
    id: String,
  },
  computed: {
    filteredItems() {
      return [
        {
          id: "audio-1",
          title: "Same Love",
          subtitle: "Macklemore & Ryan Lewis",
          image: "https://www1.wdr.de/radio/1live/events/macklemore-ryan-lewis-116~_v-gseapremiumxl.jpg",
          audioFile: "https://cf-media.sndcdn.com/rnvrRcpy1Ry1?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vcm52clJjcHkxUnkxKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwMzM3MTkxN319fV19&Signature=RfbXKLuMtuWwJJmh2P2KWJI~IX-gfJD6EJM3n2yNfq-0~wmRm33cSf97b6yrpSO~GY2tiQbJcD7GvjrzQxJ7PIuCbiz1L7ug8d9~FFhpB2NiP~OQA2VBFESXyrp57J3S26ep4wU7t3JgCVQYF2MnWwXz8aDJ8GNnhE4T5anL9-xnh3U7xfs6AWwqZAXjRWiNJle2w9UI89zfbVcGTirSOWbksElzDCHKD~4ZMS8PLLi3HYM8pb5dcux199w2fvgm5jS3wJP5R0zrOuPy5V0HYWPijPQBUBuQlFCQwRzFlTHFCBH~SoPB89V2YrxGb-6B0o5qiZtVvkfBUoTCE3qEJQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"
        },
        {
          id: "audio-2",
          title: "Böhmische Liebe",
          subtitle: "Mathias Rauch",
          image: "https://www.musyno.com/img/composer/cover/2022-04-12_salinia_portrait_mathias-rauch.jpg",
          audioFile: "https://s3.eu-central-1.amazonaws.com/download.blasmusik-shop.de/daten/Partituren-MP3/2015/251352.mp3",
        },
      ]
    }
  }
}
</script>
