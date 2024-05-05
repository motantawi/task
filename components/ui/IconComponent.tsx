import Image from "next/image";
import React from "react";

const IconComponent = ({
  src,
  alt,
  count,
}: {
  src: string;
  alt: string;
  count?: number;
}) => {
  return (
    <button className="flex items-center gap-1">
      <Image src={src} alt={alt} width={24} height={24} />
      {count && <span className="text-xs">{count}</span>}
    </button>
  );
};

export default IconComponent;
