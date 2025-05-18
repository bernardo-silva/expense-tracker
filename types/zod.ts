import { ZodArray, ZodObject, type ZodSchema, type ZodTypeAny } from "zod";

export function extractRecordOptions(schema: ZodSchema) {
  const fields = extractFields(schema);

  return {
    expand: extractExpandKeys(fields).join(","),
    fields: fields.join(","),
  };
}

export function extractFields(schema: ZodSchema): string[] {
  function traverse(obj: ZodTypeAny, prefix = ""): string[] {
    if (!isZodObject(obj)) return [];

    return Object.keys(obj.shape).reduce<string[]>((acc, key) => {
      const field = obj.shape[key];
      const newPrefix = prefix ? prefix + "." + key : key;

      if (isZodObject(field)) return acc.concat(traverse(field, newPrefix));

      if (isZodArray(field) && isZodObject(field.element)) {
        return acc.concat(traverse(field.element, newPrefix));
      }

      return acc.concat(newPrefix);
    }, []);
  }

  return traverse(schema);
}
function extractExpandKeys(fields: string[]): string[] {
  const expandKeyGroups = fields
    .filter((field) => field.includes("expand."))
    .map((field) =>
      field
        .split(".")
        .reduce((acc: string[], curr, index, arr) => {
          if (curr === "expand" && index < arr.length - 1) {
            acc.push(arr[index + 1]);
          }
          return acc;
        }, [])
        .join(".")
    );

  // Remove subpaths that are implied in longer subpaths
  const filteredGroups = expandKeyGroups.filter(
    (group) =>
      !expandKeyGroups.some((otherGroup) =>
        otherGroup.includes(group) && otherGroup !== group
      ),
  );

  // Remove duplicates
  return Array.from(new Set(filteredGroups));
}

function isZodArray(field: ZodTypeAny): field is ZodArray<ZodTypeAny> {
  return field instanceof ZodArray;
}

function isZodObject(
  field: ZodTypeAny,
): field is ZodObject<{ [key: string]: ZodTypeAny }> {
  return field instanceof ZodObject;
}
