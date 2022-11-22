const data = require("yahoo-finance");
const mysql = require("mysql");

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "stockdata",
});

const retrieveData = async (tickerSymbol, freq, from, to) => {
	if (from == "") {
		from = new Date(1900, 01, 01);
	}
	if (to == "") {
		to = new Date();
	}
	const stockQuote = await data.historical(
		{
			symbol: tickerSymbol,
			from: from,
			to: to,
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
