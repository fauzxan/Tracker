const yahooFinance = require("yahoo-finance");

async function calculate_rsi(symbol, from) {
	// Step 1: calculate the change in price daily/monthly/ etc (typical period is for 14days) for  the specified period: from date required
    // Step 2: calculate the average loss and average gain based on the daily price changes. 
    // Step 3: Apply the formula: RSI = 100 - 100 / (1 + averageGain / averageLoss)
        console.log("symbol inside:", symbol);
        console.log("from inside:", from);
        var RSI = 0;
        const rsi = await yahooFinance.historical(
            {
                symbol: symbol,
                from: from,
            },
            function (err, quotes) {
                if (err) console.log(err);
                else {
                    var left = 0;
                    var right = 1;
                    var updwardTrend = 0;
                    var upwardCount = 0;
                    var downwardTrend = 0;
                    var downwardCount = 0;
                    while (right < quotes.length) {
                        const change = quotes[right].adjClose - quotes[left].adjClose;
                        if (change >= 0) {
                            updwardTrend += change;
                            upwardCount++;
                        } else {
                            downwardTrend += Math.abs(change);
                            downwardCount++;
                        }
                        right++;
                        left++;
                    }

                    var averageGain = updwardTrend / upwardCount;
                    var averageLoss = downwardTrend / downwardCount;
                    RSI = 100 - 100 / (1 + averageGain / averageLoss);
                }
            }
        );
        return RSI;
}

module.exports = { calculate_rsi };
