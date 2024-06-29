/* eslint-disable @next/next/no-img-element */
import { Quote } from "lucide-react";
import { AuthForm } from "./AuthForm";
import { PageParams } from "@/types/next";
import { currentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div className="relative flex h-screen items-center bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <p className="inline-block bg-gradient-to-l from-primary to-violet-500 bg-clip-text text-sm font-medium text-transparent dark:from-primary dark:to-violet-400">
              Preline: A vision for 2024
            </p>

            <div className="mt-4 max-w-2xl md:mb-12">
              <h1 className="mb-4 text-4xl font-semibold text-gray-800 dark:text-neutral-200 lg:text-5xl">
                Fully customizable rules to match your unique needs
              </h1>
              <p className="text-gray-600 dark:text-neutral-400">
                We provide you with a test account that can be set up in
                seconds. Our main focus is getting responses to you as soon as
                we can.
              </p>
            </div>

            <blockquote className="relative hidden max-w-sm md:block">
              <Quote className="absolute start-0 top-0 size-16 -translate-x-6 -translate-y-8 transform text-gray-200 dark:text-neutral-800" />

              <div className="relative z-10">
                <p className="text-xl italic text-gray-800 dark:text-white">
                  Amazing people to work with. Very fast and professional
                  partner.
                </p>
              </div>

              <footer className="mt-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="ms-4 grow">
                    <div className="font-semibold text-gray-800 dark:text-neutral-200">
                      Josh Grazioso
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-500">
                      Director Payments & Risk | Airbnb
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div>
            <AuthForm />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-x-1.5 py-3 text-sm text-gray-800 after:ms-6 after:flex-1 after:border-t after:border-gray-200 dark:text-white dark:after:border-neutral-700 md:mt-12">
          <span className="bg-gradient-to-l from-primary to-violet-500 bg-clip-text font-semibold text-transparent dark:from-primary dark:to-violet-400">
            50,000
          </span>
          individuals and companies trust Preline
        </div>
      </div>
    </div>
  );
}
