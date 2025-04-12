<script setup lang="ts">
import { ExpensesService } from '~/services/ExpensesService';
import type { ExpensesRecord } from '~/types/pocketbase-types';

const expenses = ref<ExpensesRecord[]>([]);
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
    <ul class="list btn-ghost">
      <li v-for="expense in expenses" :key="expense.id" class="list-row hover:bg-base-300">
        <NuxtLink :to="`/expense/${expense.id}`" class="list-col-grow flex flex-col">
          <p class="text-2xl font-bold"> {{ expense.description }} </p>
          <p class="text-md text-base-content/70"> {{ formatDate(expense.date ?? expense.created ?? "") }} </p>
        </NuxtLink>
        <div class="text-lg font-bold my-auto" :class="expense.amount < 0 ? 'text-success' : 'text-error'">{{
          formatMoney(expense.amount) }}</div>
      </li>
    </ul>
  </div>
</template>
