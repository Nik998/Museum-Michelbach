/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Import necessary modules
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { registerPlugins } from '@/plugins'

// Define i18n messages
const messages = {
  en: {
    welcome: 'Welcome to the Museum of the City of Alzenau.<br>This is an interactive audio guide that will lead you through the exhibition.<br>Please come in.',
    entrance: 'Entrance',
    roomPrev: '<',
    roomNext: '>',
  },
  de: {
    welcome: 'Herzlich Willkommen im Museum der Stadt Alzenau.<br>Dies ist ein interaktiver Audio Guide, der Sie durch die Ausstellung führt.<br>Bitte treten Sie ein.',
    entrance: 'Eingang',
    roomPrev: '<',
    roomNext: '>',
  }
}

// Create i18n instance
const i18n = createI18n({
  locale: 'de', // set locale
  fallbackLocale: 'de', // set fallback locale
  messages, // set locale messages
})

// Create Vue app
const app = createApp(App)

// Use plugins
registerPlugins(app)

// Use i18n
app.use(i18n)

// Mount the app
app.mount('#app')

export class Room {
  constructor(id, title, subtitle, text, image) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.text = text;
    this.image = image;
  }
}