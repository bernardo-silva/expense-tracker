<script setup lang="ts">
const auth = useAuthStore();
</script>
<template>
  <div>
    <SideDrawer v-if="auth.isLoggedIn">
      <NavBar class="flex-none" />
      <NuxtPage class="flex-1" />
    </SideDrawer>
    <template v-else>
      <NavBar class="flex-none" />
      <NuxtPage class="flex-1" />
    </template>
    <ErrorModal />
  </div>
</template>
