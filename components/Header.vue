<template>
  <div>
    <div id="header-container">

      <NuxtLink to="/" class="logo text-style-logo" id="logo">SWING</NuxtLink>

      <div class="main-pages">

        <CustomLink :to="'/promotions'" :link-text="'Promotions'" />
        <CustomLink :to="'/process'" :link-text="'Process'" />
        <CustomLink :to="'/about'" :link-text="'About'" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// I need to import color styles
// I need to setup multi CSS files in Nuxt
// I need to import the resets css page

// Better create a page link component

</script>

<style scoped>
  #header-container {
    /* color=Default */

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2.8rem 4.2rem;

    position: absolute;
    height: 8rem;
    left: 0;
    right: 0;
    top: 0;

    /* white */

    border: 0.1rem solid var(--color-white);    
    border-radius: 0.5rem;
  }

  .logo {
    color: var(--color-white);
  }
  .main-pages {
    /* pages */

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0rem 3.2rem;
    gap: 3.8rem;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }


</style>