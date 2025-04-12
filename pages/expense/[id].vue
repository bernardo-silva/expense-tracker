<script setup lang="ts">
import { ExpensesService } from '~/services/ExpensesService';
import type { ExpensesRecord } from '~/types/pocketbase-types';

const route = useRoute();
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const expense = ref<ExpensesRecord>();

onMounted(async () => {
  expense.value = (await ExpensesService.getUserExpense(id))
})

const deleteExpense = async () => {
  try {
    const deleted = await ExpensesService.deleteUserExpense(id)
    if (deleted) navigateTo('/expenses')
  }
  catch (error) {
    showErrorDialog(error);
  }

}

</script>
<template>
  <div class="container mx-auto">
    <div class="mx-4">
      <h1 class="text-3xl font-bold mb-6"> {{ expense?.description }} </h1>
      <p class="text-2xl"> {{ formatMoney(expense?.amount ?? 0) }} </p>
      <h1 class="text-xl mb-6"> Category: <span class="badge badge-soft badge-info">{{ expense?.category }}</span> </h1>
      <p class="text-md"> {{ formatDate(expense?.date ?? expense?.created ?? "") }} </p>
      <button class="btn btn-error" @click="deleteExpense">Delete</button>
    </div>
  </div>
</template>
