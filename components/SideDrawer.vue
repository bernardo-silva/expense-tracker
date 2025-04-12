<script setup lang="ts">
const auth = useAuthStore();
</script>

<template>
  <div class="drawer lg:drawer-open">
    <!-- drawer state -->
    <input id="drawer" type="checkbox" class="drawer-toggle">

    <!-- main content -->
    <div class="drawer-content flex flex-col min-h-screen">
      <slot />
    </div>

    <!-- drawer content -->
    <div class="drawer-side screen">
      <label for="drawer" aria-label="close sidebar" class="drawer-overlay" />
      <div class="flex flex-col h-full w-50 bg-base-200 text-base-content">
        <!-- logo -->
        <div class="hidden flex-none lg:flex p-2">
          <NuxtLink class="btn btn-ghost text-xl" to="/">My App</NuxtLink>
        </div>

        <!-- home -->
        <ul class="menu text-base-content w-full flex-1 gap-2">
          <li>
            <NuxtLink to="/">
              <svg class="h-6 w-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/expenses">
              My Expenses
            </NuxtLink>
          </li>

          <!-- profile -->
          <li class="mt-auto">
            <NuxtLink :to="auth.isLoggedIn ? '/profile' : '/login'">
              <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ auth.isLoggedIn ? auth.user?.name : 'Login' }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
