<script setup lang="ts">
import { ExpensesService } from '~/services/ExpensesService';
import type { Expense } from '~/types/types';

const expenses = ref<Expense[]>([]);
onMounted(async () => {
  expenses.value = await ExpensesService.getUserExpenses()

})

</script>
<template>
  <div class="container mx-auto">
    <div class="flex justify-between mx-4">
      <h1 class="text-3xl font-bold mb-6">Expenses</h1>
      <NuxtLink to="/new-expense" class="btn btn-primary">Add Expense</NuxtLink>
    </div>
    <ExpenseList :expenses />
  </div>
</template>
