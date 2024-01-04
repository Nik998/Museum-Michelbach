<template>
    <v-app style="height: 40px;" app>
      <v-app-bar class="bg-secondary" height="40">
        <v-btn class="ml-auto">
          <img :src="currentFlag" height="25" v-on:click="switchLanguage" />
        </v-btn>
      </v-app-bar>

      <v-app-bar dense :flat="true" height="180" style="background-color: transparent;">
        <v-row class="fill-height" no-gutters>
          <v-col cols="4" class="d-flex align-center" style="background-color: rgba(255,255,255,0.85);">
            <v-img class="mx-3 my-auto" :src="logo" alt="Logo" height="100" contain />
          </v-col>
          <v-col cols="8" class="d-flex align-center justify-start text-center" style="
               height: 85%;
               background-color: rgba(152,174,37,0.85);">
            <h1 class="mx-auto font-weight-light text-white">Museum Michelbach</h1>
          </v-col>
        </v-row>
      </v-app-bar>
    </v-app>

  <v-img v-if="showImage" :src="pictureSchloesschen" height="600px" :cover=true></v-img>
  <div v-else style="margin-top: 153px;"></div>
</template>

<script>
import logo from '@/assets/logo_stadt-alzenau.png';
import pictureSchloesschen from '@/assets/schlösschen-front.jpg';
import germanFlag from '@/assets/flags/german-flag.jpg';
import britishFlag from '@/assets/flags/british-flag.png';

export default {
  data() {
    return {
      logo,
      pictureSchloesschen,
      germanFlag,
      britishFlag,
      currentFlag: germanFlag,
    }
  },
  props: {
    showImage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    switchLanguage() {
      const languages = [
        { name: "english", locale: "en", flag: this.britishFlag },
        { name: "german", locale: "de", flag: this.germanFlag }
      ];

      const currentLanguage = this.$i18n.locale;
      const newLanguage = languages.find(language => language.locale !== currentLanguage);

      this.$i18n.locale = newLanguage.locale;

      this.currentFlag = newLanguage.flag;
    },
  }
}

</script>

<style scoped></style>
