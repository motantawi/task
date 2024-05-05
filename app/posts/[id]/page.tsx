"use client";
import { useQuery } from "@tanstack/react-query";
import { requestPost, requestPostComments } from "@/api/posts";
import CommentCard from "@/components/Cards/CommentCard";
import PostCard from "@/components/Cards/PostCard";
import IconComponent from "@/components/ui/IconComponent";
import { PostFormData, Comment } from "@/types";

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
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* Main post area */}
        <div className="lg:w-2/3 space-y-4">
          <div className="w-full md:w-[60%] border-b-2 border-blue-600 pb-2">
            <PostCard body={post?.body || "Post content not available"} />
          </div>

          <div>
            <div className="rounded-md bg-gray-400 w-full h-[20rem]"></div>
            <div className="flex flex-wrap justify-between mt-4">
              <div className="flex items-center gap-6">
                <IconComponent src="/assets/dislike.svg" alt="dislike" />
                <IconComponent src="/assets/like.svg" alt="like" />
              </div>
              <div className="flex items-center gap-3">
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
          <input
            type="text"
            placeholder="Search Posts..."
            className="w-full p-4 mb-4 border-gray-300 border rounded-lg shadow-sm"
          />
          <div className="shadow-md rounded-md p-3">
            <h4 className="font-semibold mb-4">Related Posts</h4>
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="mb-4" key={index}>
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
