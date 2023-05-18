import { getSortedPostsData } from "../../lib/writing";

export default function Writing() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <h1 className="header">Writing</h1>
      <div className="paragraph">
        {/* TODO(rey-soleil): add style */}
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={title}>
              {title}
              {date}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
