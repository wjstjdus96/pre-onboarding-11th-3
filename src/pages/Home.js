import IssueList from "../components/IssueList";
import { useContext, useEffect } from "react";
import {
  IssueActionContext,
  IssueValueContext,
} from "../contexts/IssueContext";
import { getIssue } from "../apis/issueService";

export default function Home() {
  const { loadIssue, toggleLoading } = useContext(IssueActionContext);
  const { page } = useContext(IssueValueContext);

  const fetchIssues = async () => {
    toggleLoading(true);
    await getIssue(loadIssue, page);
    toggleLoading(false);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return <IssueList />;
}
