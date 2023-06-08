import Date from "../../../components/Date";
import { getPostData } from "../../../lib/writing";

type PostProps = {
  params: {
    id: string;
  };
};

/*
* NOTE: because Tailwind removes base styles preflight, things like <h1>s won't
* appear any different than <p>s. One option is to add my own global base styles
* on top of Tailwind
*/
export default async function Post({ params }: PostProps) {
  const { id } = params;
  const postData = await getPostData(id);

  return (
    <div>
      <h1 className="header">{postData.title}</h1>
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </div>
  );
}
