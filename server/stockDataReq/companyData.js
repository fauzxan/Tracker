const yahooFinance = require("yahoo-finance");

async function calc() {
	const result = await yahooFinance.quote("AAPL", ["summaryDetail", "earnings"]);
	console.log(result);
}

calc()