"use server";

import {verifySlugUniqueness, verifyUniqueness} from "@/actions/common.actions";
import { redactorAction } from "@/lib/safe-actions";
import { generateSlug } from "@/lib/utils";
import { prisma } from "@/prisma";
import {
  CategorySchema,
  CategoryType,
  PostSchema,
  TagSchema,
  TagType,
} from "@/schema/Post";

export const createPost = redactorAction(PostSchema, async (input, context) => {
  return 0;
});

export const createTag = redactorAction(
  TagSchema,
  async (input: TagType, context) => {
    input.slug = generateSlug(input.title);
    await verifySlugUniqueness(input.slug, "tag");
    await verifyUniqueness(input.slug, "tag");
    return (await prisma.tag.create({ data: { ...input } })).slug;
  }
);

export const createCategory = redactorAction(
  CategorySchema,
  async (category: CategoryType, context) => {
    category.slug = generateSlug(category.title);
    await verifySlugUniqueness(category.slug, "category");
    return (await prisma.category.create({ data: { ...category } })).slug;
  }
);
