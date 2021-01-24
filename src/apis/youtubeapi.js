import axios from "axios";
const KEY = "AIzaSyCSK5w0P6kSIGmBjDtE7cwZ-KeNoGwBX2o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    // maxResult: 5,
    key: KEY,
  },
});
