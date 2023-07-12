import { useContext } from "react";
import { axiosClient } from "./axiosClient";
import { IssueActionContext } from "../contexts/IssueContext";

export const getIssue = (existingData, setHandler, page) => {
  return axiosClient
    .get(`/issues?sort=comments&page=${page}`)
    .then((res) => {
      if (res.status == 200) {
        // const fetchedData = res.data;
        // const mergedData = existingData.concat(...fetchedData);
        // setHandler(mergedData);
        setHandler(res.data);
      }
    })
    .catch((err) => console.log(err));
};
