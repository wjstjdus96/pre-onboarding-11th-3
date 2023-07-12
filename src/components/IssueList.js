import { useEffect, useContext } from "react";
import { getIssue } from "../apis/issueService";
import {
  IssueActionContext,
  IssueValueContext,
} from "../contexts/IssueContext";
import IssueCard from "./IssueCard";
import useDidMountEffect from "../hooks/useDidMountEffect";

export default function IssueList() {
  const { loadIssue, toggleLoading } = useContext(IssueActionContext);
  const { issues, isLoading } = useContext(IssueValueContext);

  useEffect(() => {
    getIssue(loadIssue);
  }, []);

  useDidMountEffect(() => {
    toggleLoading(false);
  }, [issues]);

  useEffect(() => {
    console.log(issues);
  }, [isLoading]);

  return (
    <div>
      {!isLoading &&
        issues.map((item, idx) => (
          <IssueCard key={item.id} id={idx + 1} data={item} />
        ))}
    </div>
  );
}
