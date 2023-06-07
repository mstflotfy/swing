<template>
  <div>
    <NuxtLink class="text-style-page-link link" :to="to">{{ linkText }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
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
    color: var(--color-main);
  }

</style>