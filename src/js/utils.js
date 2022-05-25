import languages from "./languages.js"

/*const reachGoal = goal => {
	if (window.ym) {
		window.ym(48621644, "reachGoal", goal);
	}
	else {
		console.log("Достижение цели: " + goal);
	}
}*/

const getLanguage = lang => {
	let result = {
		code: lang,
	}
	for (let phraseKey in languages) {
		const item = languages[phraseKey]
		result[phraseKey] = item[lang]
	}
	return result
}

const calcPrice = distance => {
	let total = 0
	if (distance <= 35) {
		total += distance
	}
	if (distance > 35) {
		total += 35
		if (distance <= 70) {
			total += .53 * (distance - 35)
		}
		else {
			total += .53 * (70 - 35)
		}
	}
	if (distance > 70) {
		total += .27 * (distance - 70)
	}
	return total
}

export {
	//reachGoal,
	getLanguage,
	calcPrice,
}