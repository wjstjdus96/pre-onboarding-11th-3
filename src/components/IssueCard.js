import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { WANTED_IMAGE_URL, WANTED_URL } from "../constants/const";
import { calculateDate } from "../utils/calculateDate";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid;
  padding: 8px;
  & > div:first-child {
    flex-basis: 85%;
  }
`;

const ImgContainer = styled.div`
  flex-basis: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-size: 12px;
  }
  h4 {
    margin: 0;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

export default function IssueCard({ id, isAd, data }) {
  const navigate = useNavigate();

  const navigateDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const navigateWantedSite = () => {
    window.location.replace(WANTED_URL);
  };

  return (
    <>
      {isAd ? (
        <Wrapper onClick={navigateWantedSite}>
          <ImgContainer>
            <img src={WANTED_IMAGE_URL} />
          </ImgContainer>
        </Wrapper>
      ) : (
        <Wrapper>
          <Part>
            <h4 onClick={() => navigateDetail(id)}>
              #{id} {data.title}
            </h4>
            <div>
              작성자 : {data.user.login}, 작성일 :
              {calculateDate(data.created_at)}
            </div>
          </Part>
          <Part>
            <div>코멘트: {data.comments}</div>
          </Part>
        </Wrapper>
      )}
    </>
  );
}
