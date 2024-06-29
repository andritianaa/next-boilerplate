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
