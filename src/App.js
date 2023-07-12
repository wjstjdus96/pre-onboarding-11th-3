import { styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";

const Layout = styled.div`
  width: 500px;
  height: 200px;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
