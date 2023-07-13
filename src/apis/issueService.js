import { useContext } from "react";
import { axiosClient } from "./axiosClient";
import { IssueActionContext } from "../contexts/IssueContext";

export const getIssue = async (setHandler, page) => {
  return axiosClient
    .get(`/issues?sort=comments&per_page=10&page=${page}`)
    .then((res) => {
      if (res.status == 200) {
        setHandler(res.data);
      }
    })
    .catch((err) => console.log(err));
};
