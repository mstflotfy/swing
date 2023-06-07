<template>
  <div class="content">
    <Header></Header>
    <h1 class="text-style-main">SWING</h1>

    <figure class="vidContainer">

      <video class="vid" controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>

  </figure>

  <p>Swing is a short animation that tries to capture the emotion of mood swings</p>

  </div>
</template>

<script setup lang="ts">
// Title must have a breakpoint for smaller screens

</script>

<style scoped>

  .content {
    flex-direction: column;
    text-align: center;
    min-height: 107vh;
  }

  h1 {
    color: var(--color-main);
    text-align: center;
  }

  html {
    background: black;
  }

  .vid {
    min-width: 60%;
  }

</style>