import axios from "axios"
import router from "@/router";
import store from "@/store";

axios.defaults.baseURL = "http://79.129.44.71:10101/"

axios.interceptors.response.use(function(response) {
  return response
}, function (error) {
    if (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        sessionStorage.setItem("token", null)
        store.commit("auth/setlogedInUser", null)
        return router.push('/login')
      }
    }
  })