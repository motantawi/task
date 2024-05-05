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
      <div className="max-w-2xl mt-20 mb-40 px-6 lg:px-0 lg:pl-40">
        <h1 className="text-4xl font-bold mb-4">Form</h1>
        <h3 className="text-2xl mb-4 text-[#667085]">create a post</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Title of the post
            </label>
            <input
              type="text"
              id="title"
              placeholder="Type Here"
              {...register("title")}
              className="border rounded-lg p-3 w-full outline-none"
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
              placeholder="Type Here"
              {...register("userId")}
              className="border rounded-lg p-3 w-full outline-none"
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
              className="border rounded-lg p-2 w-full outline-none"
              rows={5}
              draggable={false}
            />
            <p className="text-red-500 text-xs mt-1">{errors.body?.message}</p>
          </div>

          <button
            type="submit"
            className="bg-[#485AFF] text-white font-medium p-3 rounded-md w-full disabled:opacity-50"
            disabled={isPending}
          >
            {isPending ? "Creating..." : "Share Post"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
