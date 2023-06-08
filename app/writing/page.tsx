import Link from "next/link";
import Date from "../../components/Date";
import { getSortedPostsData } from "../../lib/writing";

export default function Writing() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <h1 className="header">Writing</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link
              href={`/writing/${id}`}
              className="text-2xl font-bold text-blue-500"
            >
              {title}
            </Link>
            <br />
            <Date dateString={date} />
          </li>
        ))}
      </ul>
    </>
  );
}
