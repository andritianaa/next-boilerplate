"use server";

import { ActionError } from "@/lib/safe-actions";
import { prisma } from "@/prisma";

export const verifySlugUniqueness = async (
  slug: string,
  objectName: string,
  id?: number
) => {
  const slugExists = await prisma[objectName].findFirst({
    where: {
      slug: slug,
      id: id
        ? {
            not: id,
          }
        : undefined,
    },
  });
  if (slugExists) {
    throw new ActionError("Slug already exists");
  }
};

export const verifyUniqueness = async (
  title: string,
  objectName: string,
  id?: number
) => {
  const titleExists = await prisma[objectName].findFirst({
    where: {
      title: title,
      id: id
        ? {
            not: id,
          }
        : undefined,
    },
  });
  if (titleExists) {
    throw new ActionError("Title already exists");
  }
};
