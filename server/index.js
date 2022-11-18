const express = require("express");
const app = express();
const { retrieveData } = require("./stockDataReq/stockData");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/retrieveData", (req, res) => {
	console.log("req body: ",req.body);
	//data = retrieveData();
	//data.then((response) => {
		//console.log("data from retrieval: \n", response);
	//	res.status(200).json(response);
	//});
});

app.listen(5000, () => {
	console.log(
		"Information server runs perfectly and is brought to you by Yahoo Finance!"
	);
});
