import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IssueValueContext } from "../contexts/IssueContext";
import IssueCard from "./IssueCard";
import { styled } from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { defaultImageURL } from "../constants/const";
import { getOneIssue } from "../apis/issueService";
import Loading from "./Loading";

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
  width: 90px;
  height: 90px;
  margin: 10px 10px 0px 10px;
`;

const Body = styled.div`
  padding: 20px;
  overflow: auto;
  font-size: 13px;
`;

export default function IssueDetail() {
  const id = useParams().id;
  const [data, setData] = useState();

  useEffect(() => {
    getOneIssue(id).then((res) => {
      if (res.status == 200) {
        setData(res.data);
      }
    });
  }, []);

  return (
    <div>
      {data ? (
        <>
          <Head>
            <Profile image={data.user.avatar_url} />
            <IssueCard id={data.number} data={data} />
          </Head>
          <Body>
            <ReactMarkdown children={data.body} remarkPlugins={[remarkGfm]} />
          </Body>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
