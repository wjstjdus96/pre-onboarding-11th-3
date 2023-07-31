import { useEffect, useContext } from "react";
import { getIssue } from "../apis/issueService";
import {
  IssueActionContext,
  IssueValueContext,
} from "../contexts/IssueContext";
import IssueCard from "./IssueCard";
import Loading from "./Loading";

export default function IssueList() {
  const { toggleFetchLoading, loadMoreIssue } = useContext(IssueActionContext);
  const { issues, isLoading, page, isFetchLoading } =
    useContext(IssueValueContext);
  const loading = isLoading || isFetchLoading;

  const fetchMoreIssues = async () => {
    toggleFetchLoading(true);
    await getIssue(loadMoreIssue, page);
    toggleFetchLoading(false);
  };

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    console.log(scrollTop + clientHeight + " = " + scrollHeight);
    if (
      Math.ceil(scrollTop + clientHeight) >= scrollHeight &&
      isFetchLoading === false
    ) {
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
          <>
            <IssueCard key={idx} data={item} />
            {(idx + 1) % 4 == 0 && <IssueCard isAd={true} />}
          </>
        ))}
      {loading && <Loading />}
    </div>
  );
}
