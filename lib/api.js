import axios from "axios";

const baseURL = "http://localhost:3001";

export const getAllIncomeData = async () => {
	try {
		const response = await axios.get(`${baseURL}/income`, {
			cache: "no-store",
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

export const addNewIncome = async (newIncome) => {
	try {
		const response = await axios.post(`${baseURL}/income`, newIncome);
		return response.data;
	} catch (error) {
		console.error("Error adding new data:", error);
	}
};
