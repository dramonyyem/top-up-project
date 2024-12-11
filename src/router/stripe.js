import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.stripe.com/v1',
});
    
instance.interceptors.request.use(config => {
    var token = "sk_test_51QTyonBIvPUd6gMdvLnqiO0fhd9PqSofmoBI2eKx34hPwHGb2WF5u170BAbw7mYrRx1nE0W5Sjem49oDw5YB9atT00tnms1Uzt";
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = 'application/x-www-form-urlencoded';
    return config;
});
  
export default instance;