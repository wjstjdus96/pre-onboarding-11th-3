import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { WANTED_IMAGE_URL, WANTED_URL } from "../constants/const";
import { calculateDate } from "../utils/calculateDate";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(0, 0, 0, 0.5);
  padding: 10px;
  & > div:first-child {
    flex-basis: 85%;
  }
`;

const ImgContainer = styled.div`
  flex-basis: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  h4 {
    margin: 0;
    margin-bottom: 10px;
    cursor: pointer;
  }
  div:first-child {
    flex-basis: 13%;
    color: #438bfd;
  }
  div:last-child {
    flex-basis: 87%;
  }
`;

const Sub = styled.div`
  font-size: 12px;
`;

export default function IssueCard({ isAd = false, data }) {
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
            <Title onClick={() => navigateDetail(data.number)}>
              <div>
                <h4>#{data.number}</h4>
              </div>
              <div>
                <h4>{data.title}</h4>
                <Sub>
                  작성자 : {data.user.login}, 작성일 :
                  {calculateDate(data.created_at)}
                </Sub>
              </div>
            </Title>
          </Part>
          <Part>
            <Sub>코멘트: {data.comments}</Sub>
          </Part>
        </Wrapper>
      )}
    </>
  );
}
