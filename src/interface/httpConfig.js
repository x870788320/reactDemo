
export const LOCALHOST_ADDRESS = "http://localhost:4030";

export const PRO_ADDRESS = 'http://192.168.1.49:8051'
export const DEV_ADDRESS = 'http://192.168.1.49:8051'

export const baseURL = process.env.NODE_ENV ===  'production'? PRO_ADDRESS: ""
// export const baseURL = LOCALHOST_ADDRESS
export const timeout = 8000



