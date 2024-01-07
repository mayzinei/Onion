// import axios from "axios";

// export const axiosInstance = axios.create({
// 	baseURL: "http://localhost:3001",
// });

const baseURL = "http://localhost:3001";

export const getAllData = async () => {
	const res = await fetch(`${baseURL}/income`);
	const incomes = res.json();
	return incomes;
};
