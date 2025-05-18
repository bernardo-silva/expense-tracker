<script setup lang="ts">
import { ExpensesService } from '~/services/ExpensesService';
import { GroupsService } from '~/services/GroupsService';
import type { Expense, Group } from '~/types/types';

const route = useRoute();
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const group = ref<Group>();
const expenses = ref<Expense[]>([]);

onMounted(async () => {
  group.value = await GroupsService.getUserGroup(id);
  expenses.value = await ExpensesService.listGroupExpenses(id);
})

const deleteGroup = async () => {
  try {
    const deleted = await GroupsService.deleteUserGroup(id);
    if (deleted) navigateTo('/groups');
  }
  catch (error) {
    showErrorDialog(error);
  }
}

</script>
<template>
  <span v-if="group === undefined" class="loading loading-spinner loading-xl m-auto" />
  <div v-else class="container mx-auto">
    <div class="flex justify-between ">
      <div>
        <p class="text-3xl font-bold"> {{ group.name }} </p>
        <p class="text-xl"> {{ group.description }} </p>
      </div>
      <button class="btn btn-error" @click="deleteGroup">Delete</button>
    </div>
    <div class="my-6">
      <div class="flex justify-between">
        <h1 class="text-3xl font-bold">Expenses</h1>
        <NuxtLink to="/new-expense" class="btn btn-primary">Add Expense</NuxtLink>
      </div>
      <ExpenseList :expenses />
    </div>
  </div>
</template>
