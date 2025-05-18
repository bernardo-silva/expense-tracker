import { z } from "zod";
import { extractRecordOptions } from "./zod";

// POCKETBASE ---------

const idSchema = z.string().nonempty();

// pocketbase uses a space separator instead of 'T' which zod expects
const isoDateSchema = z.string().transform((d) => d.replace(" ", "T")).pipe(
  z.string().datetime(),
);

const pbBaseSchema = z.object({
  id: idSchema,
  created: isoDateSchema,
  updated: isoDateSchema,
});

// USER ---------

const userSchema = z.object({ name: z.string().nonempty() })
  .merge(pbBaseSchema);

// GROUP ---------

const groupBaseSchema = z.object({
  name: z.string().nonempty(),
  description: z.string(),
});

const groupExpandedSchema = groupBaseSchema.extend({
  expand: z.object({
    created_by: userSchema,
    members: z.array(userSchema).nonempty(),
  }),
}).merge(pbBaseSchema);

export type Group = z.infer<typeof groupExpandedSchema>;
export const fetchGroupOptions = extractRecordOptions(groupExpandedSchema);
export const parseGroup = groupExpandedSchema.parse;
export const parseGroups = z.array(groupExpandedSchema).parse;

const groupSimpleSchema = groupBaseSchema.extend({
  created_by: idSchema,
  members: z.array(idSchema).nonempty(),
});

export type SimpleGroup = z.infer<typeof groupSimpleSchema>;
export const parseSimpleGroup = groupSimpleSchema.parse;

// EXPENSE ---------

const expenseBaseSchema = z.object({
  amount: z.number().int().gt(0),
  category: z.string().optional(),
  description: z.string(),
  date: isoDateSchema.optional(),
});

const expenseExpandedSchema = expenseBaseSchema.extend({
  expand: z.object({
    creator: userSchema,
    paid_by: userSchema,
    group: groupSimpleSchema.optional(),
  }),
}).merge(pbBaseSchema);

export type Expense = z.infer<typeof expenseExpandedSchema>;
export const fetchExpenseOptions = extractRecordOptions(expenseExpandedSchema);
export const parseExpense = expenseExpandedSchema.parse;
export const parseExpenses = z.array(expenseExpandedSchema).parse;

const expenseSimpleSchema = expenseBaseSchema.extend({
  creator: idSchema,
  paid_by: idSchema,
  group: idSchema.optional(),
});

export type SimpleExpense = z.infer<typeof expenseSimpleSchema>;
export const fetchSimpleExpenseOptions = extractRecordOptions(
  expenseSimpleSchema,
);
export const parseSimpleExpense = expenseSimpleSchema.parse;
export const parseSimpleExpenses = z.array(expenseSimpleSchema).parse;
