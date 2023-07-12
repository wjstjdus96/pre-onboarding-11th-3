import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid;
  padding: 8px;
  cursor: pointer;
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
  }
`;

export default function IssueCard({ key, data }) {
  const date = data.created_at
    .slice(0, 10)
    .split("-")
    .map((item, idx) => {
      if (idx == 0) return item + "년 ";
      if (idx == 1) return item + "월 ";
      return item + "일";
    });

  console.log(data.data);

  const navigate = useNavigate();

  const navigateDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Wrapper onClick={() => navigateDetail(data.id)}>
      <Part>
        <h4>
          #{data.id} {data.title}
        </h4>
        <div>
          작성자 : {data.user.login}, 작성일 : {date}
        </div>
      </Part>
      <Part>
        <div>코멘트: {data.comments}</div>
      </Part>
    </Wrapper>
  );
}
