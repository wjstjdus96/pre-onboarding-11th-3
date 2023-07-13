import { useEffect, useContext } from "react";
import { getIssue } from "../apis/issueService";
import {
  IssueActionContext,
  IssueValueContext,
} from "../contexts/IssueContext";
import IssueCard from "./IssueCard";

export default function IssueList() {
  const { toggleFetchLoading, loadMoreIssue } = useContext(IssueActionContext);
  const { issues, isLoading, page, isFetchLoading } =
    useContext(IssueValueContext);

  const fetchMoreIssues = async () => {
    toggleFetchLoading(true);
    await getIssue(loadMoreIssue, page);
    toggleFetchLoading(false);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && isFetchLoading === false) {
      fetchMoreIssues();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
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
