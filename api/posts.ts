import { PostFormData } from "@/types";
import BASE_URL from "./constant";
import axios from "axios";

const POSTS_PATH = "/posts";

const requestPosts = async () => {
  const response = await axios.get(`${BASE_URL}${POSTS_PATH}`);
  return response.data;
};

const requestCreatePost = async (data: PostFormData) => {
  const response = await axios.post(`${BASE_URL}${POSTS_PATH}`, data);
  return response.data;
};

const requestPost = async (id: number) => {
  const response = await axios.get(`${BASE_URL}${POSTS_PATH}/${id}`);
  return response.data;
};

const requestPostComments = async (id: number) => {
  const response = await axios.get(`${BASE_URL}${POSTS_PATH}/${id}/comments`);
  return response.data;
};

export { requestCreatePost, requestPosts, requestPost, requestPostComments };
