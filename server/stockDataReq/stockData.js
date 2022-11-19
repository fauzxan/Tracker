const data = require("yahoo-finance");
const mysql = require("mysql");

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "stockdata",
});

const retrieveData = async (tickerSymbol, freq) => {
	const stockQuote = await data.historical(
		{
			symbol: tickerSymbol,
			from: "2022-01-01",
			period: freq,
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
