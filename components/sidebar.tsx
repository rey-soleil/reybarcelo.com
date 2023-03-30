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
    <aside className="flex md:flex-col md:w-40 items-end">
      {Object.entries(navItems).map(([path, { name }]) => (
        <Link key={path} href={path} className="italic">
          <span className="p-3 relative">{name}</span>
        </Link>
      ))}
    </aside>
  );
}
