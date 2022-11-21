const express = require("express");
const app = express();
const { retrieveData } = require("./stockDataReq/stockData");
const { calculate_rsi } = require("./indicatorCalc/Rsi");
const { loadData } = require("./indicatorCalc/parent_calc");

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

app.post("/caclRsi/", (req, res) => {
	console.log("RSI calculation successful");
	const symbol = req.body.passing_value.tickerSymbol;
	const from = req.body.passing_value.from;
	if (symbol == "" || from == "") {
		res.status(200).send("waiting for form values");
	} else {
		var data = calculate_rsi(symbol, from);
		data.then((response) => {
			console.log("inside index", response);
			const sending_value = {
				rsi: response,
			};
			res.status(200).send(sending_value);
		});
	}
});

app.post("/indicatorParent/", (req, res) => {
	if (req.body == "") {
		res.status(404).send("No response yet");
	} else {
		var data = loadData(
			req.body.symbol,
			req.body.from,
			req.body.to,
			req.body.freq
		);
		res.send(data);
		console.log("indicator parent loading successful");
	}
});

app.listen(5000, () => {
	console.log(
		"Information server runs perfectly and is brought to you by Yahoo Finance!"
	);
});
