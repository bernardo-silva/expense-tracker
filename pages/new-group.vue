<script setup lang="ts">
import { GroupsService } from '~/services/GroupsService';

type GroupForm = {
  name: string;
  description: string;
};
const errors = ref<Partial<Record<keyof GroupForm, string>>>({});


const form = ref<GroupForm>({
  name: "",
  description: "",
});

const validateForm = (): boolean => {
  errors.value = {};

  if (!form.value.name.trim()) {
    errors.value.description = "Name is required.";
  }

  if (!form.value.description.trim()) {
    errors.value.description = "Description is required.";
  }

  return !Object.values(errors.value).some(Boolean);
};

const auth = useAuthStore();

const save = async () => {
  if (validateForm()) {
    await GroupsService.createUserGroup(
      {
        name: form.value.name,
        description: form.value.description,
        created_by: auth.userData.id,
        members: [auth.userData.id]
      }
    )
    navigateTo("/groups");
  }
};

</script>
<template>
  <div class="mx-4">
    <!-- Name Field -->
    <TextInput v-model="form.name" label="Name" :placeholder="'Group name'" type="text" required :error="errors.name"
      @change="() => (errors.name = undefined)" />
    <!-- Description Field -->
    <TextInput v-model="form.description" label="Description" :placeholder="'Group descruption'" type="text" required
      :error="errors.description" @change="() => (errors.description = undefined)" />

    <button class="btn btn-primary" @click="save">Save</button>
  </div>
</template>
