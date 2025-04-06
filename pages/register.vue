<script setup lang="ts">
type RegisterForm = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const isLoading = ref(false);
const form = ref<RegisterForm>({
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
});
const errors = ref<Partial<Record<keyof RegisterForm, string>>>({});

const auth = useAuthStore();

onBeforeMount(() => {
  if (auth.isLoggedIn) {
    navigateTo("/");
  }
});

const validateForm = (): boolean => {
  errors.value = {};

  if (!form.value.name.trim()) {
    errors.value.name = "Name is required.";
  }

  if (!form.value.email.trim()) {
    errors.value.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = "Email is not valid.";
  }

  if (!form.value.password.trim()) {
    errors.value.password = "Password is required.";
  } else if (form.value.password.length < 8) {
    errors.value.password = "Password should have at least 8 characters";
  }

  if (!form.value.passwordConfirm.trim()) {
    errors.value.passwordConfirm = "Password is required.";
  } else if (form.value.password != form.value.passwordConfirm) {
    errors.value.passwordConfirm = "Passwords do not match.";
  }

  return !Object.values(errors.value).some(Boolean);
};

const handleRegister = async () => {
  isLoading.value = true;
  if (validateForm()) {
    try {
      await auth.register(
        form.value.name,
        form.value.email,
        form.value.password,
        form.value.passwordConfirm,
      );
      await auth.login(form.value.email, form.value.password);
      navigateTo("/");
    } catch (error) {
      showErrorDialog(error);
    }
  }
  isLoading.value = false;
};
</script>
<template>
  <div class="flex min-h-screen items-center justify-center">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend class="fieldset-legend">Register</legend>
      <!-- Name Field -->
      <TextInput
v-model="form.name" :label="'Name'" :placeholder="'Enter your name'" :type="'text'" required
        :error="errors.name" @change="() => (errors.name = undefined)" />

      <!-- Email Field -->
      <TextInput
v-model="form.email" :label="'Email'" :placeholder="'Enter your email'" :type="'email'" required
        :error="errors.email" @change="() => (errors.email = undefined)" />

      <!-- Password Field -->
      <TextInput
v-model="form.password" :label="'Password'" :placeholder="'Enter your password'" :type="'password'"
        :error="errors.password" @change="() => (errors.password = undefined)" />

      <!-- Password Confirm Field -->
      <TextInput
v-model="form.passwordConfirm" :label="'Confirm Password'" :placeholder="'Confirm password'"
        :type="'password'" :error="errors.passwordConfirm" @change="() => (errors.passwordConfirm = undefined)" />
      <button class="btn btn-neutral relative mt-4" :disabled="isLoading" @click="handleRegister">
        <span v-if="isLoading" class="loading loading-spinner" />
        <span v-else>Register</span>
      </button>
    </fieldset>
  </div>
</template>
