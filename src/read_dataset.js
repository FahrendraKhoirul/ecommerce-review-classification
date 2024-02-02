import Papa from "papaparse";

const csvFilePath = require("../assets/dataset.csv");

const dataFromCsv = [];
Papa.parse(csvFilePath, {
	header: true,
	download: true,
	skipEmptyLines: true,
	complete: (results) => {
		dataFromCsv = results.data;
	},
});

export default {
	data() {
		return {
			dataset: dataFromCsv,
		};
	},
};
