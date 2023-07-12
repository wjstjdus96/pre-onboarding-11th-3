import { axiosClient } from "./axiosClient";

export const getIssue = async () => {
  return await axiosClient.get("/issues");
};
