"use client";
import AdminPanelLayout from "./panel/admin-panel-layout";
import type { LayoutParams } from "@/types/next";
import { redirect } from "next/navigation";
import {fetcher} from "@/lib/utils";
import useSWR from "swr";

export default  function RouteLayout(props: LayoutParams) {
  const {data: user, isLoading} = useSWR("/api/user/current", fetcher);


  if (!user && !isLoading) {
    return redirect("/authentication");
  }
  if(user){
    return <AdminPanelLayout>{props.children}</AdminPanelLayout>;

  }

}
