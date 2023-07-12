import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { IssueProvider } from "./contexts/IssueProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IssueProvider>
      <App />
    </IssueProvider>
  </React.StrictMode>
);
