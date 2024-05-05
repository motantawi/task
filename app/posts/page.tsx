"use client";
import { ChangeEvent, Suspense, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PostFormData } from "@/types";
import { requestPosts } from "@/api/posts";
import Link from "next/link";
import PostCard from "@/components/Cards/PostCard";

const Home = () => {
  // Hooks
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Fetch posts
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<PostFormData[]>({
    queryKey: ["posts"],
    queryFn: requestPosts,
  });

  // Filter posts based on title or body, using the search query parameter
  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    const search = searchParams.get("search")?.toLowerCase() || "";
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search) ||
        post.body.toLowerCase().includes(search)
    );
  }, [posts, searchParams]);

  // Handle changes in the search input and update the URL
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    const params = new URLSearchParams(searchParams);
    value ? params.set("search", value) : params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  };

  // Render loading and error states
  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (isError)
    return (
      <div className="text-center p-4 text-red-500">Error loading posts.</div>
    );

  return (
    <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
      <div className="max-w-3xl mx-auto my-10 px-3">
        <input
          type="text"
          value={searchParams.get("search") || ""}
          onChange={handleSearchChange}
          placeholder="Search Posts..."
          className="w-full p-4 mb-4 border-gray-300 border rounded-lg shadow-md"
        />
        <div className="space-y-4 shadow-md rounded-md p-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                href={`/posts/${post.id}`}
                key={post.id}
                className="block bg-white rounded-lg p-5"
              >
                <PostCard body={post.body} />
              </Link>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
