import axios from "axios";

const API = axios.create({
    baseURL: "https://ai-legal-document-analyzer-u7ui.onrender.com",
});
export default API;