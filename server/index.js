const express = require("express");
const app = express();
const { retrieveData } = require("./stockDataReq/stockData");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/retrieveData/", (req, res) => {
	const tickerSymbol = req.body.formValues.tickerSymbol;
	const freq = req.body.formValues.freq;
	const from = req.body.formValues.from;
	const to = req.body.formValues.to;
	if (tickerSymbol == "" || freq == "") {
		res.status(200).send("");
	} else {
		var data = retrieveData(tickerSymbol, freq, from, to);
		data.then((response) => {
			console.log("response inside: ", response);
			res.status(200).send(response);
		});
	}
});

app.listen(5000, () => {
	console.log(
		"Information server runs perfectly and is brought to you by Yahoo Finance!"
	);
});
