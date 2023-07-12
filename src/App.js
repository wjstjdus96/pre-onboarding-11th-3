import { styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import { IssueProvider } from "./contexts/IssueProvider";

const Layout = styled.div`
  width: 800px;
  height: 200px;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <IssueProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail?id=:id" element={<Detail />} />
            </Routes>
          </IssueProvider>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
