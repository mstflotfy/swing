<template>
  <div>
    <NuxtLink :id="$route.name === 'process' ? 'process' : ''" class="text-style-page-link link" :to="to">{{ linkText }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">

  const route = useRoute

  const {to, linkText} = defineProps({
    to: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    }
  })
</script>

<style scoped>
  .link:hover {
    color: var(--color-white);
  }

  #process:hover {
    color: white;
  }

</style>