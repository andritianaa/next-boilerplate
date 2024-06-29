import { currentUser } from "@/lib/current-user";
import type { LayoutParams } from "@/types/next";
import { redirect } from "next/navigation";

export default async function RouteLayout(props: LayoutParams<{}>) {
  const user = await currentUser();

  if (!user) {
    return <>{props.children}</>;
  } else {
    redirect("/u/account");
  }
}
