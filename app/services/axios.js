import axios from 'axios';

// base url to make requests to the mach mach database

const instance = axios.create({
  baseURL: "https://machmach.epictechworld.in/api",
})
export default instance;