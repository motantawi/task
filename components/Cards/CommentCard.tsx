import { Comment } from "@/types";
import Image from "next/image";
import React from "react";

const CommentCard = ({ body }: Comment) => {
  return (
    <div className="border px-6 py-4 rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gray-400 w-10 h-10"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <div className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
              Youssef Helmy
            </div>
            <div className="text-xs md:text-sm text-gray-500">2 weaks ago</div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-[#5357B6] font-semibold">
          <Image
            src={"/assets/Path.svg"}
            alt="share"
            width={20}
            height={20}
            className="w-4"
          />
          Reply
        </button>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
        {body}
      </p>
    </div>
  );
};

export default CommentCard;
