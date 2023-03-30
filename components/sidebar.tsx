import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/projects": {
    name: "projects",
  },
  "/writing": {
    name: "writing",
  },
};

export default function Sidebar() {
  return (
    <aside className="m-0 md:mr-2">
      {/* TODO: replace the invisible div below with a logo */}
      <div className="invisible text-6xl">a</div>
      <nav className="flex justify-center md:w-40 md:flex-col md:items-end">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link key={path} href={path} className="italic">
            <span className="relative p-3">{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
