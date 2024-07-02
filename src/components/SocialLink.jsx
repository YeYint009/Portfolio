"use client";

import Image from "next/image";
import Link from "next/link";

const SocialLink = ({ socialLink }) => {
  return (
    <div>
      <Link href={socialLink.url}>
        <Image
          src={socialLink.src}
          alt={socialLink.alt}
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

export default SocialLink;
