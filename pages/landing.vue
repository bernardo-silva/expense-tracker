<script setup lang="ts">

</script>
<template>
  <div>
    <!-- Hero Section -->
    <div class="hero min-h-[70vh] bg-gradient-to-br from-primary via-secondary to-accent">
      <div class="hero-overlay bg-opacity-60" />
      <div class="hero-content text-center text-neutral-content relative z-10">
        <div class="max-w-2xl">
          <h1 class="mb-5 text-5xl md:text-6xl font-bold drop-shadow-lg">Expense Tracker</h1>
          <p class="mb-5 text-lg md:text-xl">
            This app allows you to keep track of your own expenses, create groups to split expenses...
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#getting-started" class="btn btn-primary btn-lg shadow-lg">
              🚀 Get Started Now!
            </a>
            <NuxtLink to="/login" class="btn btn-secondary btn-lg shadow-lg">
              🔑 Login / Sign Up
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section with Emojis -->
    <div class="bg-base-100 py-16 md:py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Why Choose This Starter?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1: Nuxt 3 -->
          <div
            class="card card-bordered bg-base-100 shadow-md hover:shadow-primary/30 hover:border-primary transition-all duration-300">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-primary">⚡ Nuxt 3</h3>
              <p>Vue 3, Vite, Nitro server, file-based routing, auto-imports, layers, and the full power of the Nuxt
                ecosystem.</p>
            </div>
          </div>
          <!-- Feature 2: PocketBase -->
          <div
            class="card card-bordered bg-base-100 shadow-md hover:shadow-secondary/30 hover:border-secondary transition-all duration-300">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-secondary">📦 PocketBase</h3>
              <p>Open-source backend in a single file. Realtime DB, auth, file storage & admin UI included.</p>
            </div>
          </div>
          <!-- Feature 3: daisyUI -->
          <div
            class="card card-bordered bg-base-100 shadow-md hover:shadow-accent/30 hover:border-accent transition-all duration-300">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-accent">🌼 daisyUI</h3>
              <p>Rapidly build clean interfaces with Tailwind CSS component classes. Themeable & dark mode ready.</p>
            </div>
          </div>
          <!-- Feature 4: Auth Ready -->
          <div
            class="card card-bordered bg-base-100 shadow-md hover:shadow-info/30 hover:border-info transition-all duration-300">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-info">🔑 Auth Ready</h3>
              <p>Pre-configured login, registration, and user management powered by PocketBase SDK.</p>
            </div>
          </div>
          <!-- Feature 5: Deploy Ready -->
          <div
            class="card card-bordered bg-base-100 shadow-md hover:shadow-success/30 hover:border-success transition-all duration-300">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-success">🚀 Deploy Ready</h3>
              <p>Easily deploy your Nuxt frontend and PocketBase backend to Vercel, Fly.io, Docker, or your preferred
                host.</p>
            </div>
          </div>
          <!-- Feature 6: Customizable -->
          <div
            class="card card-bordered bg-base-100 shadow-md hover:shadow-warning/30 hover:border-warning transition-all duration-300">
            <div class="card-body items-center text-center">
              <h3 class="card-title text-warning">🛠️ Customizable</h3>
              <p>Clean code structure, sensible defaults, and clear documentation make modifications straightforward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tech Stack Section -->
    <div class="bg-neutral text-neutral-content py-16 md:py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-12">Core Technologies</h2>
        <div class="flex justify-center gap-4 md:gap-6 flex-wrap">
          <div class="badge badge-primary badge-outline badge-lg p-4">Nuxt 3</div>
          <div class="badge badge-secondary badge-outline badge-lg p-4">PocketBase</div>
          <div class="badge badge-accent badge-outline badge-lg p-4">daisyUI 5</div>
          <div class="badge badge-info badge-outline badge-lg p-4">Tailwind CSS 4</div>
          <div class="badge badge-success badge-outline badge-lg p-4">Vite</div>
        </div>
      </div>
    </div>

    <!-- Getting Started Section -->
    <div id="getting-started" class="bg-base-200 py-16 md:py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2 text-center lg:text-left">
            <h2 class="text-4xl font-bold mb-4">Ready to Build Something Awesome?</h2>
            <p class="mb-8 text-lg">
              Clone the repo, follow the simple setup instructions in the README, and you'll be developing your
              application in minutes.
            </p>
            <div class="mockup-code max-w-xl mx-auto lg:mx-0 shadow-lg text-left mb-8">
              <pre data-prefix="$"><code>git clone https://github.com/bernardo-silva/expense-tracker</code>
              </pre>
              <pre data-prefix="$"><code>cd expense-tracker</code></pre>
              <pre data-prefix="$"><code>npm install</code></pre>
              <pre data-prefix=">"><code># Follow PocketBase setup (README)</code></pre>
              <pre data-prefix="$"><code>npm run dev</code></pre>
            </div>
            <a href="https://github.com/bernardo-silva/expense-tracker" target="_blank" rel="noopener noreferrer"
              class="btn btn-primary btn-wide">
              View on GitHub
            </a>
          </div>
          <div class="lg:w-1/2">
            <div class="mockup-browser border bg-base-100 shadow-xl">
              <div class="mockup-browser-toolbar">
                <div class="input border border-base-300">https://yourapp.com</div>
              </div>
              <div class="flex justify-center px-4 py-16 bg-base-200">
                <img src="https://picsum.photos/seed/nuxpbstarter2/600/400" alt="App Screenshot Placeholder"
                  class="rounded shadow-lg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <!-- Removed SVG Icon -->
        <p class="text-lg font-semibold">Nuxt + PocketBase Starter<br>
          <span class="text-sm font-normal">Accelerating full-stack development.</span>
        </p>
        <p class="text-sm">Copyright © 2024 - Made with ❤️ by <a href="https://github.com/bernardo-silva"
            class="link link-hover link-primary">Bernardo Silva</a></p>
      </aside>
      <nav>
        <h6 class="footer-title">Links</h6>
        <div class="grid grid-flow-col gap-4">
          <!-- Link to GitHub Repo -->
          <a href="https://github.com/bernardo-silva/expense-tracker" target="_blank" rel="noopener noreferrer"
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
