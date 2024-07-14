"use client"
import Footer from "@/components/landing/Footer";
import { Grid } from "@/components/landing/Grid";
import Hero from "@/components/landing/Hero";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/common/NavBar";
import {fetcher} from "@/lib/utils";
import useSWR from "swr";

export default function Home() {
  const {data: user, isLoading} = useSWR("/api/user/current", fetcher);

  if (!user && !isLoading) {
    return (
        <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
          <div className="w-full max-w-7xl">
            <NavBar />
            <Hero />
            <Grid />
            <Footer />
          </div>
        </main>
    );
  }

  if(user) {
    redirect("/u/dashboard");
  }
}
