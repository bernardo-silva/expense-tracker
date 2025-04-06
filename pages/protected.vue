<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>
<template>
  <h1>
    This is a protected route that is only accessible when logged in
  </h1>
</template>
