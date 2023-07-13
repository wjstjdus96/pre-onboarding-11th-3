import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { WANTED_IMAGE_URL, WANTED_URL } from "../constants/const";
import { calculateDate } from "../utils/calculateDate";

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
  const date = calculateDate(data.created_at);
  const navigate = useNavigate();

  const navigateDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const navigateWantedSite = () => {
    window.location.replace(WANTED_URL);
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
