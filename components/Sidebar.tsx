import Image from "next/image";
import Link from "next/link";

const navItems = {
  "/about": {
    name: "about",
  },
  //   "/projects": {
  //     name: "projects",
  //   },
  "/writing": {
    name: "writing",
  },
};

export default function Sidebar() {
  return (
    <aside className="m-0 mb-3 flex flex-col  md:mr-14 md:items-end ">
      <div className="header relative h-16 w-16">
        <Link href="/">
          <Image src="/logo-red.png" alt="logo" fill />
        </Link>
      </div>
      <nav className="flex justify-evenly border-b-4 border-b-slate-600 px-3 md:flex-col  md:items-end md:border-b-0">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link key={path} href={path} className="mb-1">
            <span className="relative font-normal italic">{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
