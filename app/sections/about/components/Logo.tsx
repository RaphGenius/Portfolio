import Image from "next/image";
import React from "react";
type Props = {
  width: number;
  url: string;
  alt: string;
};
function Logo({ width, url, alt }: Props) {
  return (
    <div className="hover:backdrop-blur-xl flex items-center justify-center">
      <Image width={width} src={url} alt={alt} />
    </div>
  );
}
export default Logo;
