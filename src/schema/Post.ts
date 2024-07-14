import { z } from "zod";

export const PostStatus = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);

export const PostSchema = z.object({
  title: z.string().min(10),
  slug: z
    .string()
    .regex(/^[a-zA-Z0-9_-]*$/)
    .min(5)
    .max(20),
  summary: z.string().min(20).max(255),
  status: PostStatus,
  content: z.string().min(1),
  readTime: z.number().int().positive(),
  imageUrl: z.string().url(),
  tags: z.array(z.number()),
  categories: z.array(z.number()),
});

export const TagSchema = z.object({
  title: z.string().min(2).max(32),
  slug: z.string().min(2).max(32),
  content: z.string().min(10).max(256),
});

export const CategorySchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Title is required" })
    .min(2, { message: "Title must be at least 2 characters" })
    .max(32, { message: "Title must be at most 32 characters" }),

  content: z
    .string()
    .nonempty({ message: "Content is required" })
    .min(2, { message: "Content must be at least 2 characters" })
    .max(256, { message: "Content must be at most 256 characters" }),
  slug: z
    .string()
    .nonempty({ message: "Slug is required" })
    .regex(/^[a-zA-Z0-9_-]*$/, {
      message: "Slug only allow alphanumeric characters with - and _",
    })
    .min(2, { message: "Slug must be at least 2 characters" })
    .max(32, { message: "Slug must be at most 32 characters" }),
  parentId: z.number().nullable(),
});

export type ProductType = z.infer<typeof PostSchema>;
export type TagType = z.infer<typeof TagSchema>;
export type CategoryType = z.infer<typeof CategorySchema>;
