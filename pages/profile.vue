<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore();
const name = auth.userData?.name ?? "No name"
const email = auth.userData?.email ?? "No email"

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6 text-base-content">Account Settings</h1>

    <div class="divider">Profile Information</div>

    <!-- Profile Form -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Name Field -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Full Name</span>
        </div>
        <input v-model="name" type="text" placeholder="Your Name" class="input input-bordered w-full">
      </label>

      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Email Address</span>
        </div>
        <input
type="email" placeholder="Your Email" class="input input-bordered w-full" :value="email" readonly
          disabled>
      </label>

      <button class="btn btn-primary">
        Edit
      </button>
    </div>

    <div class="divider mt-6">Settings</div>

    <!-- Settings Section -->
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Theme</span>
      </div>
      <div class="dropdown mb-72">
        <div tabindex="0" role="button" class="btn m-1">
          Theme
          <svg
width="12px" height="12px" class="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
          </svg>
        </div>
        <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
          <li v-for="theme in ['light', 'dark', 'cyberpunk', 'valentine', 'retro']" :key="theme">
            <input
type="radio" name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start" :aria-label="theme" :value="theme">
          </li>
        </ul>
      </div>
    </label>

    <div class="card bg-base-200 shadow-xl mt-8">
      <div class="card-body">
        <h3 class="card-title text-error">Danger Zone</h3>
        <p>Be careful with actions in this section.</p>
        <div class="card-actions justify-end mt-4">
          <button class="btn btn-error btn-outline">Delete Account</button>
        </div>
      </div>
    </div>

  </div>
</template>
