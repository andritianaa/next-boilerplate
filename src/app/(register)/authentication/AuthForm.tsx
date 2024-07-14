"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./Input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { loginSchema, registerSchema } from "./validationSchema";

type Variant = "LOGIN" | "REGISTER";

export const AuthForm = () => {
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else setVariant("LOGIN");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(variant === "LOGIN" ? loginSchema : registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => {
          toast.error("Something went wrong !");
          setIsLoading(false);
        });
    }
    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
          } else if (callback?.ok) {
            toast.success("Logged in !");
            router.push("/u/account");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials");
        } else if (callback?.ok) {
          toast.success("Logged in !");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">
            {variant === "LOGIN" ? "Login" : "Sign up"}
          </CardTitle>
          <CardDescription>
            Enter your email below to{" "}
            {variant === "LOGIN" ? "login" : "sign up"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              {variant === "REGISTER" && (
                <>
                  <Label htmlFor="name">Name</Label>

                  <Input
                    id="name"
                    placeholder="Enter your name"
                    register={register}
                    errors={errors}
                  />
                </>
              )}

              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                register={register}
                errors={errors}
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            </div>
            <Button disabled={isLoading} type="submit" className="w-full">
              {variant === "LOGIN" ? "Login" : "Register"}
            </Button>
            <Button
              onClick={() => socialAction("google")}
              variant="outline"
              className="w-full"
            >
              Login with Google
            </Button>
          </form>
          <div className="mt-4 flex gap-2 text-center text-sm">
            {variant === "LOGIN" ? "Does not have account?" : "Already joined?"}
            <p className="cursor-pointer underline" onClick={toggleVariant}>
              {variant === "LOGIN" ? " Create an account" : " Login"}
            </p>
          </div>
        </CardContent>
      </Card>
  );
};
