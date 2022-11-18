const data = require("yahoo-finance");
const mysql = require("mysql");

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "stockdata",
});

const retrieveData = async () => {
	const stockQuote = await data.historical(
		{
			symbol: "AAPL",
			from: "2022-01-01",
			period: "m",
			// period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
		},
		function (err, quotes) {
			if (err) { 
				console.log(err);
			}
		}
	);
	return stockQuote;
};

module.exports = { retrieveData };
