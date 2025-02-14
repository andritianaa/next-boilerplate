import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var globalPrisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.globalPrisma ?? prismaClientSingleton();

globalThis.globalPrisma = prisma;
