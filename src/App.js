import { styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import { IssueProvider } from "./contexts/IssueProvider";

const Layout = styled.div`
  width: 500px;
  max-height: 400px;
`;

const Body = styled.div``;

function App() {
  return (
    <div className="App">
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
