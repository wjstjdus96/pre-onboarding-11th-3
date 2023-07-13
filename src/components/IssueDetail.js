import { useContext } from "react";
import { useParams } from "react-router-dom";
import { IssueValueContext } from "../contexts/IssueContext";
import IssueCard from "./IssueCard";
import { styled } from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { defaultImageURL } from "../constants/const";

const Head = styled.div`
  display: flex;
  align-items: stretch;
  & > div:last-child {
    flex-basis: 85%;
  }
`;

const Profile = styled.div`
  ${(props) =>
    props.image == ""
      ? `background-image: url(${defaultImageURL});`
      : `background-image: url(${props.image});`};
  background-size: cover;
  width: 80px;
  height: 80px;
  margin: 10px;
`;

const Body = styled.div`
  padding: 20px;
  overflow: auto;
  font-size: 13px;
`;

export default function IssueDetail() {
  const id = useParams().id;
  const { issues } = useContext(IssueValueContext);
  const data = issues[id];

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
