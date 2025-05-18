<script setup lang="ts">
import type { Expense } from '~/types/types';

defineProps<{ expenses: Expense[] }>()

</script>
<template>
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
</template>
