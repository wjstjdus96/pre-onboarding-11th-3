import { styled } from "styled-components";
import { ORGANIZATION_NAME, REPOSITORY_NAME } from "../constants/const";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 65px;
  background-color: #438bfd;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
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
