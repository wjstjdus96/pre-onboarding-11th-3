import { useEffect, useContext } from "react";
import { getIssue } from "../apis/issueService";
import {
  IssueActionContext,
  IssueValueContext,
} from "../contexts/IssueContext";

export default function IssueList() {
  const { loadIssue } = useContext(IssueActionContext);
  const { issues } = useContext(IssueValueContext);

  useEffect(() => {
    getIssue().then((res) => {
      if (res.status == 200) {
        loadIssue(res.data);
      }
    });
  }, []);

  return <div>이슈</div>;
}
