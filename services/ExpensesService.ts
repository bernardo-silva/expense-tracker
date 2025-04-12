import PocketBase from "pocketbase";
import {
  Collections,
  type ExpensesRecord,
  type TypedPocketBase,
} from "~/types/pocketbase-types";

const pb = new PocketBase("http://127.0.0.1:8090") as TypedPocketBase;

const getUserExpense = (id: string): Promise<ExpensesRecord> =>
  pb.collection(Collections.Expenses).getOne(id);

const getUserExpenses = (): Promise<ExpensesRecord[]> =>
  pb.collection(Collections.Expenses).getList(undefined, undefined, {
    sort: "-date,-created",
  }).then((resp) => resp.items);

const createUserExpense = (expense: ExpensesRecord) =>
  pb.collection(Collections.Expenses).create(expense);

const deleteUserExpense = (id: string) =>
  pb.collection(Collections.Expenses).delete(id);

export const ExpensesService = {
  createUserExpense,
  deleteUserExpense,
  getUserExpense,
  getUserExpenses,
};
