import axios from 'axios'
import router from '@/router'

export default {
    async logIn(context, payload) {
      console.log(payload)
        var response = await axios.post('auth/login', payload,{
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        const responseData = await response.data;
        sessionStorage.setItem("token", responseData.token)
        sessionStorage.setItem("user", responseData.user)
        context.commit('setlogedInUser', responseData.user)
        router.push("/ticketing")
    },
    async register(context, payload) {
      const jsonData = {
        name : payload.name,
        email : payload.email,
        password : payload.password,
        enabled : payload.enabled
      }
      var response = await axios.post('auth/register', JSON.stringify(jsonData),{
        headers: {
          "Content-Type": "application/json"
        }
      })
      router.push("/login")
  },
    resetLogedInUser(context) {
      context.commit('resetLogedInUser')
    }
}