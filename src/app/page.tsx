import Footer from "@/components/landing/Footer";
import { Grid } from "@/components/landing/Grid";
import Hero from "@/components/landing/Hero";
import { redirect } from "next/navigation";
import { currentUser } from "@/lib/current-user";
import { NavBar } from "@/components/common/NavBar";
import { Notifications } from "@/components/landing/notifications";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
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
  } else {
    redirect("/u/dashboard");
  }
}
