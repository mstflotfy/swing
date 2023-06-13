<template>
  <div class="content">
    <h1>SWING</h1>

    <figure class="vidContainer">
<!-- 
    <iframe src="https://drive.google.com/file/d/1_H9_WS6RgZmgCN_5NWfl3ZezpYHOLUhw/preview" width="640" height="480" allow="autoplay" allowfullscreen="allowfullscreen"></iframe> -->

      <video class="vid" controls>
      <source src="/swingAnimation.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>

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
    text-align: center;
    margin-bottom: 0;
    line-height: 100%;
    margin-top: 5rem;
    color: var(--color-main)
  }


  .vid {
    min-width: 60%;
  }
  video {
    max-width: 50%;
  }
  
  @media only screen and (max-width: 510px) {
    video {
      max-width: 100%;
    }

  }

</style>