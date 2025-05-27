<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
// Configuración del head de la aplicación
useHead({
  title: 'Piedra, Papel o Tijera',
  meta: [
    { name: 'description', content: 'Juego clásico de Piedra, Papel o Tijera contra la máquina con animaciones y efectos visuales' },
    { name: 'keywords', content: 'juego, piedra, papel, tijera, entretenimiento, navegador' },
    { name: 'author', content: 'Tu nombre' },
    { property: 'og:title', content: 'Piedra, Papel o Tijera - Juego' },
    { property: 'og:description', content: 'Juega al clásico Piedra, Papel o Tijera contra la máquina' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>