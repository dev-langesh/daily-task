import Link from "next/link";
import React from "react";

export default function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link href={link}>
      <a className="block my-3 p-1 bg-orange-400 hover:outline-dashed outline-orange-500 outline-1 hover:tracking-wider text-white text-center w-full ">
        {text}
      </a>
    </Link>
  );
}
