<template class="cin">
  <div class="page">
    <h1 class="text-style-h-1">Promotions</h1>

      <h2>Posters</h2>

      <div class="image-container">
        <nuxt-img src="/img/swingSite/promotions/posters/Frame10.png" preload quality="70" format="webp" sizes="sm:100vw md:50vw lg:50vw" alt="Swing animation poster" loading="eager"/>
      </div>

   <!--    <div class="image-container">
        <img src="/assets/img/swingSite/promotions/posters/Frame11.png" alt="Swing animation poster">
      </div> -->

      <OptImg src="/img/swingSite/promotions/posters/swing-poster-vercel-qr-red.png" alt="swing poster. Main character in a high mood infront of a green arrow pointing upwards. The Swing title is in the middle. Main character in a low mood over an arrow pointing down." />

<!--       <div class="image-container">
        <nuxt-img src="/img/swingSite/promotions/posters/swing-poster-vercel-qr-red.png" alt="Swing animation poster" />
      </div> -->

      <h2>Postcards</h2> 

        <div class="image-container">
          <nuxt-img src="/img/swingSite/promotions/postCards/card1.png" alt="Swing animation poster" />
        </div>

      <div class="image-container">
        <nuxt-img src="/img/swingSite/promotions/postCards/card2.png" alt="Swing animation poster" />
      </div>

      <h2>Small Postcards</h2>

        <div class="image-container">
          <nuxt-img src="/img/swingSite/promotions/smallPostCards/smallCard1.png" alt="Swing animation poster" />
        </div>

        <div class="image-container">
          <nuxt-img src="/img/swingSite/promotions/smallPostCards/smallCard2.png" alt="Swing animation poster" />
        </div>
<!--         <div class="image-container">
          <img class="img-sml" src="/assets/img/swingSite/promotions/smallPostCards/smallCard3.png" alt="Swing animation poster">
        </div> -->


<!--         <h2>Panels</h2>

        <div class="image-container">
          <img class="img-sml" src="/assets/img/swingSite/panels/IMG-4525.jpg" alt="Swing animation panel">
        </div>
 
        <div class="image-container">
          <img class="img-sml" src="/assets/img/swingSite/panels/panel1.jpg" alt="Swing animation panel">
        </div>        -->

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.image-container {
  text-align: center;
}
  img {
    max-width: 50%;
  }
  .img-sml {
    max-width: 100%;
  }

  @media only screen and (max-width: 600px) {

    img {
      max-width: 100%;
    }
  }
</style>