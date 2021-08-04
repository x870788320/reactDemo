import { GET, POST } from "./http"



//测试端口
export const test = params => GET("/api/td/cm/company/allCountByType", params)

//接口样式
export const userLogin = params => { 
  const formData = new FormData()
  formData.append("username", params.username)
  formData.append("password", params.password)
  return POST("/api/login/",formData)
}
export const userLogout = params => GET("/api/user/logout/", params)
export const countTest = params => GET("/countTest", params)



