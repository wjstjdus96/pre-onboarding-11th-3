import { styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import { IssueProvider } from "./contexts/IssueProvider";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:first-child {
    max-width: 700px;
  }
`;

const Body = styled.div`
  padding-top: 65px;
  overflow-x: hidden;
`;

function App() {
  return (
    <Layout className="App">
      <div>
        <BrowserRouter>
          <IssueProvider>
            <Header />
            <Body>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
              </Routes>
            </Body>
          </IssueProvider>
        </BrowserRouter>
      </div>
    </Layout>
  );
}

export default App;
