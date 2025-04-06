<script setup lang="ts">
type LoginForm = {
  email: string;
  password: string;
};

const isLoading = ref(false);
const form = ref<LoginForm>({
  email: "",
  password: "",
});
const errors = ref<Partial<Record<keyof LoginForm, string>>>({});

const auth = useAuthStore();

onBeforeMount(() => {
  if (auth.isLoggedIn) {
    navigateTo("/");
  }
});

const validateForm = (): boolean => {
  errors.value = {};

  if (!form.value.email.trim()) {
    errors.value.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = "Email is not valid.";
  }

  if (!form.value.password.trim()) {
    errors.value.password = "Password is required.";
  }

  return !Object.values(errors.value).some(Boolean);
};

const handleLogin = async () => {
  isLoading.value = true;
  if (validateForm()) {
    try {
      await auth.login(form.value.email, form.value.password)
      navigateTo("/protected");
    }
    finally {
      isLoading.value = false;
    }
  }
};
</script>
<template>
  <div class="flex items-center justify-center">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-8">
      <legend class="fieldset-legend text-xl">Login</legend>
      <!-- Email Field -->
      <TextInput
v-model="form.email" :label="'Email'" :placeholder="'Enter your email'" :type="'email'" required
        :error="errors.email" @change="() => (errors.email = undefined)" />

      <!-- Password Field -->
      <TextInput
v-model="form.password" :label="'Password'" :placeholder="'Enter your password'" :type="'password'"
        :error="errors.password" @change="() => (errors.password = undefined)" />
      <p>
        Don't have an account?
        <NuxtLink class="link" to="/register">Register</NuxtLink>
      </p>
      <button class="btn btn-neutral relative mt-4" :disabled="isLoading" @click="handleLogin">
        <span v-if="isLoading" class="loading loading-spinner" />
        <span v-else>Login</span>
      </button>
    </fieldset>
  </div>
</template>
