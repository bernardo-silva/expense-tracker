import { describe, expect, it } from "vitest";
import { z } from "zod";
import { extractRecordOptions } from "./zod";

describe("extractRecordOptions(zodSchema)", () => {
  describe("with one expand", () => {
    const schema = z.object({
      label: z.string(),
      slug: z.string(),
      expand: z.object({
        space: z.object({
          label: z.string(),
          slug: z.string(),
        }),
      }),
    });

    it("extracts the fields", () => {
      const actual = extractRecordOptions(schema).fields;
      const expected = [
        "label",
        "slug",
        "expand.space.label",
        "expand.space.slug",
      ];
      expect(actual.split(",")).toEqual(expected);
    });

    it("extracts the expand keys", () => {
      const actual = extractRecordOptions(schema).expand;
      const expected = "space";
      expect(actual).toEqual(expected);
    });
  });

  describe("with nested expands", () => {
    const schema = z.object({
      username: z.string(),
      email: z.string(),
      expand: z.object({
        posts: z.array(
          z.object({
            slug: z.string(),
            expand: z.object({
              comments: z.array(
                z.object({
                  label: z.string(),
                  expand: z.object({
                    author: z.object({
                      slug: z.string(),
                    }),
                  }),
                }),
              ),
            }),
          }),
        ),
        profiles: z.array(
          z.object({
            label: z.string(),
            slug: z.string(),
            expand: z.object({
              space: z.object({
                label: z.string(),
                slug: z.string(),
              }),
            }),
          }),
        ),
      }),
    });

    it("extracts the fields", () => {
      const actual = extractRecordOptions(schema).fields;
      const expected = [
        "username",
        "email",
        "expand.posts.slug",
        "expand.posts.expand.comments.label",
        "expand.posts.expand.comments.expand.author.slug",
        "expand.profiles.label",
        "expand.profiles.slug",
        "expand.profiles.expand.space.label",
        "expand.profiles.expand.space.slug",
      ];
      expect(actual.split(",")).toEqual(expected);
    });

    it("extracts the expand keys", () => {
      const actual = extractRecordOptions(schema).expand;
      const expected = "posts.comments.author,profiles.space";
      expect(actual).toEqual(expected);
    });
  });
});
