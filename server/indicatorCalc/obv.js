const { loadData } = require("./parent_calc");

const obv_calc = (symbol, from) => {
	var data = loadData(symbol, from);
	data.then((res) => {
		const adjClose = res.close;
		const volume = res.volume;
		right = 1;
		left = 0;
		var runningTotal = 0;
		var obv_trend = [];
		while (right < adjClose.length) {
			const change = adjClose[right] - adjClose[left];
			if (change < 0) {
				runningTotal -= volume[right];
			} else {
				runningTotal += volume[right];
			}
			obv_trend.push(runningTotal);
			right += 1;
		}
		console.log("On-Balance-Volume:", runningTotal);
        console.log("On-Balance-Volume Trend:", obv_trend);
	});
};

obv_calc("TSLA", "1990-01-01");
