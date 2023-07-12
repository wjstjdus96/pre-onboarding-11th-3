import { useContext } from "react";
import { useParams } from "react-router-dom";
import { IssueValueContext } from "../contexts/IssueContext";
import IssueCard from "./IssueCard";
import { styled } from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const Head = styled.div`
  display: flex;
  align-items: stretch;
`;

const defaultImageURL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfuCqbbdMiMwU1McSWyZ0pyt8QNDUMWqLz4BktqWp7wQ&s";

const Profile = styled.div`
  ${(props) =>
    props.image == ""
      ? `background-image: url(${defaultImageURL});`
      : `background-image: url(${props.image});`};
  background-size: cover;
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const Body = styled.div`
  padding: 20px;
`;

export default function IssueDetail() {
  const id = useParams().id;
  const { issues } = useContext(IssueValueContext);
  const data = issues[id];
  console.log(data);

  return (
    <div>
      <Head>
        <Profile image={data.user.avatar_url} />
        <IssueCard id={id} data={data} />
      </Head>
      <Body>
        <ReactMarkdown children={data.body} remarkPlugins={[remarkGfm]} />
      </Body>
    </div>
  );
}
