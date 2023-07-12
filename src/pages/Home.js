import IssueList from "../components/IssueList";
import { useContext, useEffect } from "react";
import {
  IssueActionContext,
  IssueValueContext,
} from "../contexts/IssueContext";
import { getIssue } from "../apis/issueService";

export default function Home() {
  const { loadIssue, toggleLoading } = useContext(IssueActionContext);
  const { issues, page } = useContext(IssueValueContext);

  const fetchIssues = async () => {
    toggleLoading(true);
    await getIssue(issues, loadIssue, page);
    toggleLoading(false);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return <IssueList />;
}
