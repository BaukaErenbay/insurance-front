import axios from "axios";

const request = axios.create({
	baseURL: window.location.host.indexOf("localhost") !== -1 ? "http://kita-transfer.com/server/api" : `${document.location.origin}/server/api`,
	timeout: 50000,
});

export default request;