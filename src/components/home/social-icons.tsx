import Image from "next/image";
import Link from "next/link";

const Socials = [
  {
    name: "X",
    url: "https://x.com/",
    image: "x.svg",
    alt: "X Icon",
  },
  {
    name: "Guithub",
    url: "https://github.com/gydoar",
    image: "github.svg",
    alt: "Github Icon",
  },
];

export function SocialIcons() {
  return (
    <div className="mb-4 flex justify-end gap-4 items-center">
      <h2 className="text-lg text-sm">Social Media</h2>
      <div className="flex gap-2 ">
        {Socials.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-md hover:scale-110 transition duration-3"
          >
            <Image
              src={`/social-icons/${item.image}`}
              alt={item.alt}
              width={20}
              height={20}
              loading="eager"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
