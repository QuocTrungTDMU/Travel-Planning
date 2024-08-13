import axios from "axios";
const Request = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
export const get = async (path,option={})=>{
    const response = await Request.get(path,option);
    return response.data;
}
export const post = async (path,option={})=>{
  const response = await Request.post(path,option);
  return response.data;
}

export default Request;
