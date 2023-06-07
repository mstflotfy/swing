<template>
  <div>
    <NuxtLink class="link" :to="to">{{ linkText }}</NuxtLink>
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