"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { createPostSchema } from "@/utils/schema";
import { PostFormData } from "@/types";
import { requestCreatePost } from "@/api/posts";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const CreatePost = () => {
  // Setup form handling with react-hook-form and YUP schema validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(createPostSchema),
  });

  // Mutation setup for creating a post
  const { mutate, isPending } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: (data: PostFormData) => requestCreatePost(data),
    onSuccess: () => {
      toast.success("Post created successfully");
      reset(); // Reset form after successful submission
    },
    onError: (error) => {
      console.error("Error creating post:", error);
      alert("Failed to create post");
    },
  });

  // Handle form submission
  const onSubmit = (data: PostFormData) => {
    mutate(data);
  };

  return (
    <>
      <Toaster />
      <div className="max-w-xl mx-auto p-4 my-10">
        <h1 className="text-2xl font-bold mb-4">Create Post</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Title of the post
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="border rounded-md p-2 w-full"
            />
            <p className="text-red-500 text-xs mt-1">{errors.title?.message}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="userId" className="block mb-2">
              User Id
            </label>
            <input
              type="text"
              id="userId"
              {...register("userId")}
              className="border rounded-md p-2 w-full"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.userId?.message}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block mb-2">
              Post Content
            </label>
            <textarea
              id="body"
              {...register("body")}
              className="border rounded-md p-2 w-full"
              rows={5}
              draggable={false}
            />
            <p className="text-red-500 text-xs mt-1">{errors.body?.message}</p>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full disabled:opacity-50"
            disabled={isPending}
          >
            {isPending ? "Creating..." : "Create Post"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
