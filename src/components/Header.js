import { styled } from "styled-components";
import { ORGANIZATION_NAME, REPOSITORY_NAME } from "../constants/const";

const Wrapper = styled.div`
  height: 50px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <Wrapper>
      <div>
        {ORGANIZATION_NAME} / {REPOSITORY_NAME}
      </div>
    </Wrapper>
  );
}
