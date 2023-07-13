import { useContext, useState, useMemo } from "react";
import { IssueActionContext, IssueValueContext } from "./IssueContext";

export function IssueProvider({ children }) {
  const [states, setStates] = useState({
    isLoading: false,
    isFetchLoading: false,
    page: 1,
    issues: [],
  });

  const actions = useMemo(
    () => ({
      loadIssue(loadedIssue) {
        setStates((prev) => ({
          issues: prev.issues.concat(loadedIssue),
          isLoading: true,
          isFetchLoading: false,
          page: prev.page + 1,
        }));
      },
      loadMoreIssue(loadedIssue) {
        setStates((prev) => ({
          issues: prev.issues.concat(loadedIssue),
          isLoading: false,
          isFetchLoading: true,
          page: prev.page + 1,
        }));
      },
      toggleLoading(bool) {
        setStates((prev) => ({
          ...prev,
          isLoading: bool,
        }));
      },
      toggleFetchLoading(bool) {
        setStates((prev) => ({
          ...prev,
          isFetchLoading: bool,
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
