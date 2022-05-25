import request from "./request"

const searchPlace = async ({query, lang}) => {
	const response = await request({
		url: `/searchPlace.php`,
		method: "post",
		data: {
			query: query,
			lang: lang,
		}
	})
	return response.data
}

const getPlaceData = async ({place_id, lang}) => {
	const response = await request({
		url: `/getPlaceData.php`,
		method: "post",
		data: {
			place_id: place_id,
			lang: lang,
		}
	})
	return response.data
}

const getRouteInfo = async ({points_from, points_to, lang}) => {
	const response = await request({
		url: `/getRouteInfo.php`,
		method: "post",
		data: {
			points_from: points_from,
			points_to: points_to,
		}
	})
	return response.data
}

const requestCallback = async ({phone, lang}) => {
	const response = await request({
		url: `/requestCallback.php`,
		method: "post",
		data: {
			phone: phone,
			lang: lang,
		}
	})
	return response.data
}

const requestTransfer = async ({
	from,
	to,
	date,
	passengers,
	transport,
	more_stops,
	nonstandard_baggage,
	email,
	phone,
	price,
	distance,
	lang,
}) => {
	const response = await request({
		url: `/requestTransfer.php`,
		method: "post",
		data: {
			from: from,
			to: to,
			date: date,
			passengers: passengers,
			transport: transport,
			more_stops: more_stops,
			nonstandard_baggage: nonstandard_baggage,
			email: email,
			phone: phone,
			price: price,
			distance: distance,
			lang: lang,
		}
	})
	return response.data
}

export {
	searchPlace,
	getPlaceData,
	getRouteInfo,
	requestCallback,
	requestTransfer,
}