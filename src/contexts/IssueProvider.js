import { useContext, useState, useMemo } from "react";
import { IssueActionContext, IssueValueContext } from "./IssueContext";

export function IssueProvider({ children }) {
  const [issues, setIssues] = useState([]);

  const actions = useMemo(
    () => ({
      loadIssue(loadedIssue) {
        setIssues((prev) => prev.concat(loadedIssue));
      },
    }),
    []
  );

  return (
    <IssueActionContext.Provider value={actions}>
      <IssueValueContext.Provider value={issues}>
        {children}
      </IssueValueContext.Provider>
    </IssueActionContext.Provider>
  );
}
