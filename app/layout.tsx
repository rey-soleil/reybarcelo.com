import Sidebar from "../components/sidebar";
import "./globals.css";

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
    <html lang="en" className="bg-black text-white">
      <body className="m-20 flex flex-col md:flex-row">
        {" "}
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
