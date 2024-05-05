"use client";
import { useQuery } from "@tanstack/react-query";
import { requestPost, requestPostComments } from "@/api/posts";
import CommentCard from "@/components/Cards/CommentCard";
import PostCard from "@/components/Cards/PostCard";
import IconComponent from "@/components/ui/IconComponent";
import { PostFormData, Comment } from "@/types";
import Image from "next/image";

const Page = ({ params }: { params: { id: number } }) => {
  // Fetching post data
  const {
    data: post,
    isError: postError,
    isLoading: postLoading,
  } = useQuery<PostFormData>({
    queryKey: ["post", params.id],
    queryFn: () => requestPost(params.id),
  });

  // Fetching comments data
  const {
    data: comments,
    isError: commentsError,
    isLoading: commentsLoading,
  } = useQuery<Comment[]>({
    queryKey: ["comments", params.id],
    queryFn: () => requestPostComments(params.id),
  });

  // Handle loading and error states
  if (postLoading || commentsLoading) return <p>Loading...</p>;
  if (postError || commentsError) return <p>Error loading data...</p>;

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* Main post area */}
        <div className="lg:w-2/4 space-y-4">
          <div className="w-full md:w-[50%] border-b-2 border-[#4DA9FF] pb-2">
            <PostCard body={post?.body || "Post content not available"} />
          </div>

          <div>
            <div className="rounded-lg bg-[#D9D9D9] w-full h-[20rem]"></div>
            <div className="flex flex-wrap justify-between mt-4 mb-16">
              <div className="flex items-center gap-9">
                <IconComponent src="/assets/dislike.svg" alt="dislike" />
                <IconComponent src="/assets/like.svg" alt="like" />
              </div>
              <div className="flex items-center justify-between w-[35%]">
                <IconComponent
                  src="/assets/comment.svg"
                  alt="comment"
                  count={comments?.length || 0}
                />
                <IconComponent
                  src="/assets/favourite.svg"
                  alt="favourite"
                  count={25}
                />
                <IconComponent src="/assets/share.svg" alt="share" />
              </div>
            </div>
          </div>

          {/* Comment section */}
          <div className="flex flex-col gap-4">
            {comments?.map((comment) => (
              <CommentCard key={comment.id} body={comment.body} />
            ))}
          </div>
        </div>

        {/* Related posts sidebar */}
        <div className="lg:w-1/3 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-4 mb-4 border-gray-300 border rounded pl-11 outline-none"
            />
            <Image
              src={"/assets/search.svg"}
              alt="search"
              className="absolute top-[17.5px] left-4"
              width={22}
              height={22}
            />
          </div>
          <div className="border rounded p-5">
            <h4 className="font-semibold mb-4">Related Posts</h4>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                className={`mb-10 ${
                  index === 0 && "border-b-2 border-[#4DA9FF] pb-2"
                }`}
                key={index}
              >
                <PostCard body="est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
