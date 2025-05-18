<script setup lang="ts">
import { GroupsService } from '~/services/GroupsService';
import type { Group } from '~/types/types';


const groups = ref<Group[]>([]);
onMounted(async () => {
  groups.value = await GroupsService.getUserGroups()
  console.log(groups.value);

})

const nameInitials = (name?: string) => {
  if (name === undefined) return "?"
  return name.split(" ").map((n) => n[0]).join("")
}
</script>
<template>
  <div class="container mx-auto">
    <div class="flex justify-between mx-4">
      <h1 class="text-3xl font-bold mb-6">Groups</h1>
      <NuxtLink to="/new-group" class="btn btn-primary">New Group</NuxtLink>
    </div>
    <ul class="list btn-ghost">
      <li v-for="group in groups" :key="group.id" class="list-row hover:bg-base-300">
        <NuxtLink :to="`/group/${group.id}`" class="list-col-grow flex flex-col">
          <p class="text-2xl font-bold"> {{ group.name }} </p>
          <p class="text-xl"> {{ group.description }} </p>
        </NuxtLink>

        <div class="avatar-group -space-x-4 my-auto">
          <div v-for="user in group.expand.members" :key="user.id" class="avatar avatar-placeholder">
            <div class="bg-neutral text-neutral-content w-12 rounded-full">
              <span>{{ nameInitials(user.name) }}</span>
            </div>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>
