import { getSortedPostsData } from "../../lib/writing";

export default function Writing() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <h1 className="header">Writing</h1>
      <ul className="w-48">
        {allPostsData.map(({ id, date, title }) => (
          <li key={title} className="flex justify-around">
            <p>{title}</p>
            <p>{date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
