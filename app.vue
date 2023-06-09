<template>
  <div id="app">

    <header>
        <Header />
    </header>

    <main>
      <NuxtPage />
    </main>

  </div>
</template>

<script setup lang="ts">

  const route = useRoute()

  console.log(route.name)

  const clr = ref('gray')

  // Is there a better way?
  // Should I document this one?!
  // Shouldn't I destroy it?
  // Why da fuck did computed not work?!!!!!!!!
  onMounted(() => {

    watchEffect(() => {
      console.log(route.name) 

      // we could set a variable to a color string that represetns the background color (balck/white/green/red), then we add conditional classes?

      if (route.name === 'index') {
        document.querySelector('html').style.background = 'var(--color-black)'
        document.querySelector('html').style.color = 'var(--color-white)'
      } else if (route.name === 'promotions') {
        document.querySelector('html').style.background = 'var(--color-white)'
        document.querySelector('html').style.color = 'var(--color-black)'
        document.getElementById('header-container').style.border = '0.1rem solid var(--color-black)'
        document.getElementById('logo').style.color = 'var(--color-main)'
      } else if (route.name === 'process') {
        document.querySelector('html').style.background = 'var(--color-main)'
        document.querySelector('html').style.color = 'var(--color-balck)'
        document.getElementById('logo').style.color = 'var(--color-white)'
        // I'll handle the header links hover turning white inside the Header.vue component (actually in the CustomLink component)
      } else if (route.name === 'about') {
        document.querySelector('html').style.background = 'var(--color-green)'
        document.querySelector('html').style.color = 'var(--color-black)'
        document.getElementById('logo').style.color = 'var(--color-main)'
      }

    })

  })


</script>

<style scoped>
  #app {
  }
</style>