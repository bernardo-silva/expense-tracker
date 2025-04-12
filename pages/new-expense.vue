<script setup lang="ts">
import { ExpensesService } from '~/services/ExpensesService';

type ExpenseForm = {
  description: string;
  amount?: number;
  date: string;
};
const errors = ref<Partial<Record<keyof ExpenseForm, string>>>({});

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`
}

const form = ref<ExpenseForm>({
  description: "",
  date: formatDate(new Date()),
});

const validateForm = (): boolean => {
  errors.value = {};

  if (!form.value.description.trim()) {
    errors.value.description = "Description is required.";
  }

  if (!form.value.amount) {
    errors.value.amount = "Amount must not be 0.";
  }

  const date = new Date(form.value.date)
  if (isNaN(date.getTime())) {
    errors.value.amount = "Invalid date";
  }

  return !Object.values(errors.value).some(Boolean);
};

const auth = useAuthStore();

const save = async () => {
  console.log(form.value.date)
  if (validateForm()) {
    await ExpensesService.createUserExpense(
      {
        user: auth.userData?.id,
        description: form.value.description,
        date: form.value.date,
        amount: (form.value.amount ?? 0) * 100,
        id: "",
      }
    )
    navigateTo("/expenses");
  }
};

</script>
<template>
  <div class="mx-4">
    <!-- Description Field -->
    <TextInput
v-model="form.description" label="Description" :placeholder="'Enter your description'" type="text"
      required :error="errors.description" @change="() => (errors.description = undefined)" />

    <!-- Amount Field -->
    <TextInput
v-model="form.amount" label="Amount" :placeholder="formatMoney(0)" type="number" required
      :error="errors.amount" @change="() => (errors.amount = undefined)" />

    <!-- Date Field -->
    <TextInput
v-model="form.date" label="Date" type="date" required :error="errors.date"
      @change="() => (errors.date = undefined)" />

    <button class="btn btn-primary" @click="save">Save</button>
  </div>
</template>
