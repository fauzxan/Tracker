const data = require("yahoo-finance");
const mysql = require("mysql");
const { quote } = require("yahoo-finance");

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "stockdata",
});

const retrieveData = async (tickerSymbol, freq,from, to) => {
	
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
