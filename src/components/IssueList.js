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
  const { issues, isLoading, page } = useContext(IssueValueContext);

  const fetchIssues = async () => {
    toggleLoading(true);
    await getIssue(issues, loadIssue, page);
    toggleLoading(false);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && isLoading === false) {
      fetchIssues();
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      {!isLoading &&
        issues.map((item, idx) => (
          <IssueCard key={idx} id={idx + 1} data={item} />
        ))}
    </div>
  );
}
