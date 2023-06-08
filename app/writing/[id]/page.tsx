import Date from "../../../components/Date";
import { getPostData } from "../../../lib/writing";

type PostProps = {
  params: {
    id: string;
  };
};

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
