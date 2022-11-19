const express = require("express");
const app = express();
const { retrieveData } = require("./stockDataReq/stockData");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/retrieveData/", (req, res) => {
	const tickerSymbol = req.body.formValues.tickerSymbol;
	const freq = req.body.formValues.freq;
	var data = retrieveData(tickerSymbol, freq);
	data.then((response) => {
		console.log("response inside: ",response)
		res.status(200).send(response);
	});
});

app.listen(5000, () => {
	console.log(
		"Information server runs perfectly and is brought to you by Yahoo Finance!"
	);
});
