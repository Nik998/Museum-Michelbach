// plugins/vuetify.js

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composable
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light', // Ensure the default theme is set
    themes: {
      light: {
        colors: {
          primary: '#829520',
          secondary: '#273340',
        },
        variables: {
          fontFamily: 'Nunito', // Set Nunito as the default font
        },
      },
      dark: {
        colors: {
          primary: '#829520',
          secondary: '#273340',
        },
        variables: {
          fontFamily: 'Nunito', // Set Nunito as the default font
        },
      },
    },
  },
})
