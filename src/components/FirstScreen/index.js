import React, {useState} from "react"
import classnames from "classnames"
import LanguageContext from "../Contexts/LanguageContext"
import {searchPlace, getPlaceData, getRouteInfo} from "../../js/api"
import {useDebouncedCallback} from "use-debounce"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Autocomplete from "../Autocomplete"
import DatePicker from "../DatePicker"
import Button from "../Button"

import LocationOnIcon from "@material-ui/icons/LocationOn"
import NearMeIcon from "@material-ui/icons/NearMe"

import styles from "./index.module.scss"

const FirstScreen = props => {
	const {getOffers, className, classes = {}, ...rest} = props

	const [isLoadingOffers, setIsLoadingOffers] = useState(false)

	const [fromInputValue, setFromInputValue] = useState("")
	const [fromValue, setFromValue] = useState(null)
	const [fromOptions, setFromOptions] = useState([])

	const [toInputValue, setToInputValue] = useState("")
	const [toValue, setToValue] = useState(null)
	const [toOptions, setToOptions] = useState([])

	const [dateValue, setDateValue] = useState(null)

	const searchFromInputDebounce = useDebouncedCallback(async (query, lang) => {
		const response = await searchPlace({
			query: query,
			lang: lang,
		})
		if (response.status === "OK") {
			setFromOptions(
				response.predictions.map(item => ({
					value: item.place_id,
					label: item.description,
				}))
			)
		} else if (response.status === "ZERO_RESULTS") {
			setFromOptions([])
		}
	}, 400)

	const onChangeFromInputValue = async (e, lang) => {
		if (e && e.type === "change" && typeof e.target.value === "string") {
			setFromValue(null)
			const value = e.target.value
			setFromInputValue(value)
			if (value.length > 0) {
				searchFromInputDebounce.callback(value, lang)
			} else {
				setFromOptions([])
			}
		}
	}

	const onChangeFrom = async (e, value, reason, lang) => {
		if (reason === "select-option") {
			setFromInputValue(value.label)
			setFromValue(value.value)

			const response = await getPlaceData({
				place_id: value.value,
				lang: lang,
			})
			if (response.status === "OK") {
			}
		} else if (reason === "clear") {
			setFromInputValue("")
			setFromValue(null)
			setFromOptions([])
		}
	}

	const searchToInputDebounce = useDebouncedCallback(async (query, lang) => {
		const response = await searchPlace({
			query: query,
			lang: lang,
		})
		if (response.status === "OK") {
			setToOptions(
				response.predictions.map(item => ({
					value: item.place_id,
					label: item.description,
				}))
			)
		} else if (response.status === "ZERO_RESULTS") {
			setToOptions([])
		}
	}, 400)

	const onChangeToInputValue = async (e, lang) => {
		if (e && e.type === "change" && typeof e.target.value === "string") {
			setToValue(null)
			const value = e.target.value
			setToInputValue(value)
			if (value.length > 0) {
				searchToInputDebounce.callback(value, lang)
			} else {
				setToOptions([])
			}
		}
	}

	const onChangeTo = async (e, value, reason, lang) => {
		if (reason === "select-option") {
			setToInputValue(value.label)
			setToValue(value.value)

			const response = await getPlaceData({
				place_id: value.value,
				lang: lang,
			})
			if (response.status === "OK") {
			}
		} else if (reason === "clear") {
			setToInputValue("")
			setToValue(null)
			setToOptions([])
		}
	}

	const onClickGetOffers = async language => {
		if (!getOffers) return
		setIsLoadingOffers(true)
		const placeFromData = await getPlaceData({
			lang: language.code,
			place_id: fromValue,
		})
		const placeToData = await getPlaceData({
			lang: language.code,
			place_id: toValue,
		})
		//console.log("placeFromData", placeFromData)
		//console.log("placeToData", placeToData)
		const routeInfo = await getRouteInfo({
			points_from: [placeFromData.result.location.lat, placeFromData.result.location.lng],
			points_to: [placeToData.result.location.lat, placeToData.result.location.lng],
		})
		setIsLoadingOffers(false)
		//console.log("routeInfo", routeInfo.data)
		if (typeof routeInfo.data.distance === "number") {
			getOffers({
				from: {
					value: fromValue,
					name: fromInputValue,
					points: [placeFromData.result.location.lat, placeFromData.result.location.lng],
				},
				to: {
					value: toValue,
					name: toInputValue,
					points: [placeToData.result.location.lat, placeToData.result.location.lng],
				},
				date: dateValue,
				distance: routeInfo.data.distance,
				routes: routeInfo.data.routes,
			})
		} else {
			alert(language.wrongRoute)
		}
	}

	return (
		<LanguageContext.Consumer>
			{({language}) => (
				<div {...rest} className={classnames(styles.root, className, classes.root)}>
					<Container>
						<h1 className={styles.title}>{language.firstScreenTitle}</h1>
						<h6 className={styles.subtitle}>Ваша жизнь под нашей защитой</h6>
					</Container>
				</div>
			)}
		</LanguageContext.Consumer>
	)
}

export default FirstScreen
