<script setup lang="ts">

</script>
<template>
  <div>
    <!-- Hero Section -->
    <div class="hero min-h-[70vh]">
      <div class="hero-overlay bg-opacit-60" />
      <div class="hero-content text-center text-neutral-content relative z-10">
        <div class="max-w-2xl">
          <h1 class="mb-5 text-5xl md:text-6xl font-bold drop-shadow-lg">Build Faster with Nuxt & PocketBase</h1>
          <p class="mb-5 text-lg md:text-xl">
            Leverage this powerful starter kit combining <strong>Nuxt 3</strong>,
            <strong>PocketBase</strong>, and
            <strong>daisyUI</strong>
            to kickstart your next full-stack application.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#getting-started" class="btn btn-primary btn-lg shadow-lg">
              Get Started Now!
            </a>
            <NuxtLink to="/login" class="btn btn-secondary btn-lg shadow-lg">
              Login / Sign Up
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-base-200 py-16 md:py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Why Choose This Starter?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1: Nuxt 3 -->
          <div class="card card-bordered bg-base-300 shadow-md">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-primary">⚡ Nuxt 3</h3>
              <p>Vue 3, Vite, Nitro server, file-based routing, auto-imports, layers, and the full power of the Nuxt
                ecosystem.</p>
            </div>
          </div>
          <!-- Feature 2: PocketBase -->
          <div class="card card-bordered bg-base-300 shadow-md">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-secondary">📦 PocketBase</h3>
              <p>Open-source backend in a single file. Realtime DB, auth, file storage & admin UI included.</p>
            </div>
          </div>
          <!-- Feature 3: daisyUI -->
          <div class="card card-bordered bg-base-300 shadow-md">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-accent">🌼 daisyUI</h3>
              <p>Rapidly build clean interfaces with Tailwind CSS component classes. Themeable & dark mode ready.</p>
            </div>
          </div>
          <!-- Feature 4: Auth Ready -->
          <div class="card card-bordered bg-base-300 shadow-md">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-info">🔑 Auth Ready</h3>
              <p>Pre-configured login, registration, and user management powered by PocketBase SDK.</p>
            </div>
          </div>
          <!-- Feature 5: Deploy Ready -->
          <div class="card card-bordered bg-base-300 shadow-md">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-success">🚀 Deploy Ready</h3>
              <p>Easily deploy your Nuxt frontend and PocketBase backend to Vercel, Fly.io, Docker, or your preferred
                host.</p>
            </div>
          </div>
          <!-- Feature 6: Customizable -->
          <div class="card card-bordered bg-base-300 shadow-md">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-warning">🛠️ Customizable</h3>
              <p>Clean code structure, sensible defaults, and clear documentation make modifications straightforward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Footer -->
    <footer class="footer p-10 bg-base-300 text-base-content">
      <aside>
        <!-- Removed SVG Icon -->
        <p class="text-lg font-semibold">Nuxt + PocketBase Starter<br>
          <span class="text-sm font-normal">Accelerating full-stack development.</span>
        </p>
        <p class="text-sm">Copyright © 2024 - Made with ❤️ by <a
href="https://github.com/bernardo-silva"
            class="link link-hover link-primary">Bernardo Silva</a></p>
      </aside>
      <nav>
        <h6 class="footer-title">Links</h6>
        <div class="grid grid-flow-col gap-4">
          <!-- Link to GitHub Repo -->
          <a
href="https://github.com/bernardo-silva/expense-tracker" target="_blank" rel="noopener noreferrer"
            class="link link-hover">
            GitHub Repo
          </a>
          <!-- Add other relevant links here -->
        </div>
      </nav>
    </footer>

  </div>
</template>

<script setup lang="ts">
// No specific script needed for the landing page itself
</script>

<style scoped>
/* Optional: Add smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Removed animation styles */
</style>
