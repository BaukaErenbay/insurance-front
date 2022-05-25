import axios from "axios"

const request = axios.create({
	baseURL:
		process.env.NODE_ENV === "development"
			? "http://192.168.1.100:8082/api" //"https://testnik.kz/api/user"
			: process.env.REACT_APP_API_BASE_URL,
	timeout: 15000,
	/*headers: {
		"Access-Control-Allow-Origin": "*",
	},*/
})

export default request
