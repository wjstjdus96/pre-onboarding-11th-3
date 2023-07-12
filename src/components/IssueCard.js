import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WANTED_IMAGE_URL =
  "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid;
  padding: 8px;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-size: 13px;
  }
  h4 {
    margin: 0;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

export default function IssueCard({ id, data }) {
  const date = data.created_at
    .slice(0, 10)
    .split("-")
    .map((item, idx) => {
      if (idx == 0) return item + "년 ";
      if (idx == 1) return item + "월 ";
      return item + "일";
    });

  const navigate = useNavigate();

  const navigateDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const navigateWantedSite = () => {
    window.location.replace("https://www.wanted.co.kr/");
  };

  return (
    <>
      <Wrapper>
        <Part>
          <h4 onClick={() => navigateDetail(id)}>
            #{id} {data.title}
          </h4>
          <div>
            작성자 : {data.user.login}, 작성일 : {date}
          </div>
        </Part>
        <Part>
          <div>코멘트: {data.comments}</div>
        </Part>
      </Wrapper>
      {id % 4 == 0 && (
        <Wrapper onClick={navigateWantedSite}>
          <div>
            <img src={WANTED_IMAGE_URL} />
          </div>
        </Wrapper>
      )}
    </>
  );
}
