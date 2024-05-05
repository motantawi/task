import React from "react";

type Props = {
  body: string;
};

const PostCard = ({ body }: Props) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-3">
        <div
          className="rounded-md bg-[#D9D9D9] w-9 h-9"
        ></div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-900">Youssef Helmy</p>
          <div className="text-xs text-[#4DA9FF]">@yousef-helmy</div>
        </div>
      </div>
      <p className="text-xs text-gray-500 my-3">{body}</p>
    </>
  );
};

export default PostCard;
