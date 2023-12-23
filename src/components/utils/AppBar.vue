<template>
  <v-app style="height: 40px;">
    <v-app-bar class="bg-secondary"
               height="40">
      <v-btn v-if="showBackButton"
             text="<  Zurück"
             link to="/"/>
    </v-app-bar>

    <v-app-bar
      :fixed=false
      dense
      :flat=true
      height="180"
      style="background-color: transparent;"
    >
      <v-row class="fill-height"
             no-gutters>
        <v-col cols="4"
               class="d-flex align-center"
               style="background-color: rgba(255,255,255,0.85);">
          <v-img class="mx-3 my-auto"
                 :src="logoUrl"
                 alt="Logo"
                 height="100"
                 contain/>
        </v-col>
        <v-col cols="8"
               class="d-flex align-center justify-start text-center"
               style="
               height: 85%;
               background-color: rgba(152,174,37,0.85);">
          <h1 class="mx-auto font-weight-light text-white">Museum Michelbach</h1>
        </v-col>
      </v-row>
    </v-app-bar>

  </v-app>

  <v-img
    :src="pictureUrl"
    height="600px"
    :cover=true
  >
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      logoUrl: 'https://www.alzenau.de/layout/alzenau/media/logo_stadt-alzenau.png?__ts=1406812913', // Your logo URL
      pictureUrl: 'https://www.alzenau.de/media/custom/2413_1274_1_r.JPG?1411725283', // Your picture URL
    }
  },
  computed: {
    showBackButton() {
      return this.$route.path !== "/";
    }
  }
}

</script>

<style scoped>
</style>
