import { Comment } from "@/types";
import Image from "next/image";
import React from "react";

const CommentCard = ({ body }: Comment) => {
  return (
    <div className="border px-6 py-4 rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gray-400 w-10 h-10"></div>
          <div className="text-lg font-medium text-gray-800">Youssef Helmy</div>
          <div className="text-gray-500">2 weaks ago</div>
        </div>
        <button
          className="flex items-center gap-2 text-[#5357B6] font-semibold"
        >
          <Image src={"/assets/Path.svg"} alt="share" width={20} height={20} />
          Reply
        </button>
      </div>
      <p className="text-gray-600 leading-relaxed mb-6">{body}</p>
    </div>
  );
};

export default CommentCard;
