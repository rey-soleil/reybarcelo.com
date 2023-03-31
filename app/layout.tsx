import Sidebar from "../components/Sidebar";
import "./global.css";

export const metadata = {
  title: "Rey Barceló",
  description: "My portfolio site",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" bg-white text-black">
      <body className="mx-10 my-8 flex flex-col md:my-20 md:flex-row">
        {" "}
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
