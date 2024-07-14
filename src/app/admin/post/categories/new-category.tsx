"use client";

import { Loading } from "@/components/plate-ui/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateSlug } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { CategorySchema } from "@/schema/Post";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@/components/common/error-message";
import { z } from "zod";

type FormFields = z.infer<typeof CategorySchema>;

export default function NewCategory() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(CategorySchema),
  });

  const [title, setTitle] = useState<string>("Default Title");
  const [, setSlug] = useState<string>("default-title");
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    setSlug(generateSlug(newTitle));
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This slug is already taken",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add new category</CardTitle>
        <CardDescription>
          Ipsum dolor sit amet, consectetur adipiscing elit
          {errors.root && <ErrorMessage message={errors.root.message} />}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-3">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              className="w-full"
              placeholder="Gaming, Development, AI ... "
              {...register("title", {
                onChange: (e) => handleTitleChange(e.target.value),
              })}
              value={title}
            />
            {errors.title && <ErrorMessage message={errors.title.message} />}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              type="text"
              className="w-full"
              placeholder="Category slug"
              {...register("slug", {
                onChange: (e) => setSlug(generateSlug(e.target.value)),
              })}
            />
            {errors.slug && <ErrorMessage message={errors.slug.message} />}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="Content">Content</Label>
            <Textarea
              id="Content"
              placeholder="For what is this category made for?"
              className="min-h-32"
              {...register("content")}
            />
            {errors.content && (
              <ErrorMessage message={errors.content.message} />
            )}
          </div>
          <div className="flex justify-end gap-2">
            <Button
              disabled={isSubmitting}
              className="gap-2"
              type="reset"
              variant="ghost"
            >
              Reset
            </Button>
            <Button disabled={isSubmitting} className="gap-2" type="submit">
              {isSubmitting ? (
                <>
                  <Loading /> Loading...
                </>
              ) : (
                <>
                  <Plus /> Create
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
