import AdminPanelLayout from "./panel/admin-panel-layout";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return <AdminPanelLayout>{props.children}</AdminPanelLayout>;
}
