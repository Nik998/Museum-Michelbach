/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composable
import { createApp } from 'vue'

const app = createApp(App)

export class Room {
  constructor(id, title, subtitle, text) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.text = text;
  }
}

registerPlugins(app)

app.mount('#app')
