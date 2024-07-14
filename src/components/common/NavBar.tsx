"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Fingerprint } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "supports-backdrop-blur:bg-background/90 top-0 z-40 w-full bg-background/40 backdrop-blur-lg fixed left-0"
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="relative mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
            <Badge variant="secondary">Beta</Badge>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/contact"
              className={cn(
                "flex items-center justify-center transition-colors hover:text-foreground/80",
                pathname?.startsWith("/contact")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className={cn(
                "flex items-center justify-center transition-colors hover:text-foreground/80",
                pathname?.startsWith("/about")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={cn(
                "flex items-center justify-center transition-colors hover:text-foreground/80",
                pathname?.startsWith("/blog")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <nav className="flex items-center gap-1">
            <ModeToggle />
          </nav>
          <Link
            className={cn(
              buttonVariants(),
              " max-w-52 gap-2 overflow-hidden whitespace-pre md:flex",
              "group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
            )}
            href="/authentication"
          >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
            <div className="flex items-center">
              <Fingerprint />
              <span className="ml-1">Sign in</span>{" "}
            </div>
          </Link>
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
};
