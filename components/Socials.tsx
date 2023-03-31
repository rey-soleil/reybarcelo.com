import Image from "next/image";

const socials = [
  {
    href: "https://www.linkedin.com/in/rey-barcelo",
    src: "linkedin.svg",
  },
  {
    href: "https://github.com/rey-soleil",
    src: "github.svg",
  },
  {
    href: "https://www.goodreads.com/user/show/38251054-rey",
    src: "goodreads.svg",
  },
];

export default function Socials() {
  return (
    <div className="flex justify-evenly md:flex-col md:justify-start">
      {socials.map(({ href, src }) => (
        <a className="relative h-12 w-12" href={href} key={href}>
          <Image fill src={src} alt="linkedin" />
        </a>
      ))}
    </div>
  );
}
