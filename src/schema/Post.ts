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
  title: z.string().min(2).max(32),
  content: z.string().min(2).max(256),
  slug: z.string().min(2).max(32),
  parentId: z.number().nullable(),
});

export type ProductType = z.infer<typeof PostSchema>;
export type TagType = z.infer<typeof TagSchema>;
export type CategoryType = z.infer<typeof CategorySchema>;
