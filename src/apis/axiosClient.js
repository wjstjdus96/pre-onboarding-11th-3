import axios from "axios";
import {
  ACCESS_TOKEN,
  BASE_URL,
  ORGANIZATION_NAME,
  REPOSITORY_NAME,
} from "../constants/const";

export const axiosClient = axios.create({
  baseURL: `${BASE_URL}/repos/${ORGANIZATION_NAME}/${REPOSITORY_NAME}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
