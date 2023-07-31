import axios from "axios";
import {
  BASE_URL,
  ORGANIZATION_NAME,
  REPOSITORY_NAME,
} from "../constants/const";

const access_token = process.env.REACT_APP_API_KEY;

export const axiosClient = axios.create({
  baseURL: `${BASE_URL}/repos/${ORGANIZATION_NAME}/${REPOSITORY_NAME}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  },
});
