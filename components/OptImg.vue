<template>
  <div>

    <div :class="center ? 'center' : ''">
      <nuxt-img :src="src" :preload="preload" :quality="quality" :format="format" :sizes="sizes" :alt="alt" :loading="loading"/>
    </div>

  </div>
</template>

<script setup lang="ts">

const { src, preload, quality, format, sizes, alt, loading, center} = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true,
  },
  preload: {
    type: Boolean,
    default: false
  },
  quality: {
    type: Number,
    default: 80
  },
  format: {
    type: String,
    default: 'webp'
  },
  sizes: {
    type: String,
    // default: `xs:320 sm:640 md:768 lg:1024 xl:1280 xxl:1536`
    default: 'sm:100vw md:50vw lg:50vw'
  },
  loading: {
    type: String,
    default: 'lazy' // eager|lazy
  },
  center: {
    type: Boolean,
    default: true
  }
})

</script>

<style scoped>

.center {
  text-align: center;
}
  img {
    max-width: 55%;
    border-radius: 1rem;
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