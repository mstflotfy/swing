<template>
  <div class="content">
    <Header></Header>
    <h1>SWING</h1>

    <figure class="vidContainer">

    <iframe src="https://drive.google.com/file/d/1_H9_WS6RgZmgCN_5NWfl3ZezpYHOLUhw/preview" width="640" height="480" allow="autoplay" allowfullscreen="allowfullscreen"></iframe>
<!--       <video class="vid" controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video> -->

  </figure>

  <small>Swing is a short animation that tries to capture the emotion of mood swings.</small>

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
    margin-bottom: 0;
    line-height: 100%;
    margin-top: 5rem;
  }

  html {
    background: black;
  }

  .vid {
    min-width: 60%;
  }

</style>