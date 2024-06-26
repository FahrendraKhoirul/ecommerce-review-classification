//import axios
import axios from "axios";

const api = axios.create({
	// baseURL: "https://ecommerce-neuralnetwork.onrender.com",
	baseURL: "https://myportofolio-1234.et.r.appspot.com/",
});

const computeSentence = async (sentence) => {
	try {
		const response = await api.get("/predict", {
			params: {
				sentence: sentence,
			},
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export { computeSentence };
