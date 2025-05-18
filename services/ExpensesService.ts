import PocketBase from "pocketbase";
import { Collections, type TypedPocketBase } from "~/types/pocketbase-types";
import {
  type Expense,
  fetchExpenseOptions,
  parseExpense,
  parseExpenses,
  type SimpleExpense,
} from "~/types/types";

const pb = new PocketBase("http://127.0.0.1:8090") as TypedPocketBase;

const getUserExpense = (id: string): Promise<Expense> =>
  pb.collection(Collections.Expenses).getOne(id, fetchExpenseOptions).then(
    parseExpense,
  );

const getUserExpenses = (): Promise<Expense[]> =>
  pb.collection(Collections.Expenses).getList(undefined, undefined, {
    ...fetchExpenseOptions,
    sort: "-date,-created",
  }).then(({ items }) => parseExpenses(items));

const createExpense = (expense: SimpleExpense) =>
  pb.collection(Collections.Expenses).create(expense);

const deleteUserExpense = (id: string) =>
  pb.collection(Collections.Expenses).delete(id);

const listGroupExpenses = (groupId: string): Promise<Expense[]> =>
  pb.collection(Collections.Expenses).getList(1, 50, { // Adjust perPage as needed
    filter: `group = "${groupId}"`,
    sort: "-date,-created",
    ...fetchExpenseOptions,
  }).then(({ items }) => parseExpenses(items));

export const ExpensesService = {
  createExpense,
  deleteUserExpense,
  getUserExpense,
  getUserExpenses,
  listGroupExpenses,
};
