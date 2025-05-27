import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  app: {
    head: {
      title: 'Piedra, Papel o Tijera - Juego',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Juego clásico de Piedra, Papel o Tijera contra la máquina' }
      ]
    }
  }
})