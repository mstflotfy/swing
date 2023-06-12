<template>
  <div class="page">
    <h1 class="text-style-h-1">About</h1>

    <h2>Omar M. Lotfy</h2>
    <OptImg class="img" src="/img/swingSite/IMG-0934.jpg" alt="Omar Lotfy the, the author of the swing animation personal picture" :preload="true" loading="eager" :quality="100" :center="false"/>
<!--     <div class="image-container">
      <nuxt-img src="/img/swingSite/IMG-0934.jpg" alt="Omar Lotfy the, the author of the swing animation personal picture" />
    </div> -->
      <p>My name is Omar M. Lotfy, 2D animation artist, and Graphci Designer. 
        
        Since I was a child I always
  had a thing for Art, and througout the whole school period, many individuals including Art
  Learning course instructors recommended that I should keep focusing on Art and hone
  my drawing skills.</p>

  <h2>Contact</h2>
  <ul>
    <li><NuxtLink class="link" to="https://www.instagram.com/omar.m.lotfy/" target="_blank" rel="noopener">Instagram (@omar.m.lotfy)</NuxtLink></li>
    <li><NuxtLink class="link" to="https://www.facebook.com/ltfyomar" target="_blank" rel="noopener">facebook.com/ltfyomar</NuxtLink></li>
  </ul>

    <h2>Tools</h2>
      <ul>
        <li>iPad</li>
        <li>Procreate</li>
        <li>Figma</li>
        <li>Affinity Designer</li>
      </ul>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.image-container {
}
  .img {
    border-radius: 1rem;
  }
  @media only screen and (max-width: 600px) {

    img {
      max-width: 100%;
    }
  }

  .link {
    color: rgb(51, 119, 245);
    text-decoration: underline;
  }
  .link:hover {
    background-color: var(--color-black);
    padding: 0.5rem;
    border-radius: 2rem;
  }
  li {
    margin-bottom: 1.2rem;
  }

</style>