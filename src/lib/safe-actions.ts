// safe-actions.ts

import { createSafeActionClient } from "next-safe-action";
import { currentUser } from "@/lib/current-user";

export class ActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ActionError";
  }
}

const handleReturnedServerError = (error: Error) => {
  if (error instanceof ActionError) {
    return error.message;
  }
  return "An unexpected error occurred";
};

export const action = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
});

export const userAction = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
  middleware: async () => {
    const user = await currentUser();

    if (!user) {
      throw new ActionError("You must be logged in");
    }

    return { user };
  },
});
export const adminAction = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
  middleware: async () => {
    const user = await currentUser();

    if (!user?.privileges.includes("SU")) {
      throw new ActionError("You do not have right privileges");
    }

    return { user };
  },
});
export const moderatorAction = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
  middleware: async () => {
    const user = await currentUser();

    if (
      !user?.privileges?.some(
        (privilege) => privilege === "MODERATOR" || privilege === "SU"
      )
    ) {
      throw new ActionError("You do not have right privileges");
    }

    return { user };
  },
});

export const redactorAction = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
  middleware: async () => {
    const user = await currentUser();

    if (
      !user?.privileges?.some(
        (privilege) => privilege === "REDACTOR" || privilege === "SU"
      )
    ) {
      throw new ActionError("You do not have right privileges");
    }

    return { user };
  },
});
