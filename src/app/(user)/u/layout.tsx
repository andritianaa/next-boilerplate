import AdminPanelLayout from "./panel/admin-panel-layout";
import { currentUser } from "@/lib/current-user";
import type { LayoutParams } from "@/types/next";
import { notFound } from "next/navigation";

export default async function RouteLayout(props: LayoutParams<{}>) {
  const user = await currentUser();
  if (user) {
    return <AdminPanelLayout>{props.children}</AdminPanelLayout>;
  } else {
    notFound();
  }
}
