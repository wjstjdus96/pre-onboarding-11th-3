import { useContext } from "react";
import { axiosClient } from "./axiosClient";
import { IssueActionContext } from "../contexts/IssueContext";

export const getIssue = async (handler) => {
  return await axiosClient
    .get("/issues")
    .then((res) => {
      if (res.status == 200) {
        handler(res.data);
      }
    })
    .catch((err) => console.log(err));
};
