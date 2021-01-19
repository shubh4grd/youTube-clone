import axios from "axios";
const KEY = "AIzaSyCFapqLqEMzbmYHy83o5tLu55AhOSwbKRQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    // maxResult: 5,
    key: KEY,
  },
});
