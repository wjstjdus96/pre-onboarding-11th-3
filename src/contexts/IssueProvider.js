import { useContext, useState, useMemo } from "react";
import { IssueActionContext, IssueValueContext } from "./IssueContext";

export function IssueProvider({ children }) {
  const [states, setStates] = useState({ isLoading: false, issues: [] });

  const actions = useMemo(
    () => ({
      loadIssue(loadedIssue) {
        setStates((prev) => ({
          issues: prev.issues.concat(loadedIssue),
          isLoading: true,
        }));
      },
      toggleLoading(bool) {
        setStates((prev) => ({
          ...prev,
          isLoading: bool,
        }));
      },
    }),
    []
  );

  return (
    <IssueActionContext.Provider value={actions}>
      <IssueValueContext.Provider value={states}>
        {children}
      </IssueValueContext.Provider>
    </IssueActionContext.Provider>
  );
}
