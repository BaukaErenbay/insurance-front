import React, {useState, useCallback} from "react";
import classnames from "classnames";
import LanguageContext from "../Contexts/LanguageContext";
import { calcPrice } from "../../js/utils";
import { requestTransfer } from "../../js/api";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Title from "../Title";
import Counter from "../Counter";
import Space from "../Space";
import TextField from "../TextField";
import TransportCard from "../TransportCard";
import DatePicker from "../DatePicker";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Button from "../Button";

import LocationOnIcon from '@material-ui/icons/LocationOn';
import NearMeIcon from '@material-ui/icons/NearMe';

import styles from "./index.module.scss";

const transports = [
	{
		name: "Mercedes-Benz Vito",
		spaciousness: 6,
		image: require("../../img/transports/mercedes-benz-vito.png").default,
	},
	{
		name: "Volkswagen Caravelle",
		spaciousness: 8,
		image: require("../../img/transports/volkswagen-caravelle.png").default,
	},
	{
		name: "Volkswagen Crafter",
		spaciousness: 10,
		image: require("../../img/transports/volkswagen-crafter.png").default,
	},
	{
		name: "Mercedes-Benz Sprinter",
		spaciousness: 15,
		image: require("../../img/transports/mercedes-benz-sprinter.png").default,
	},
]

const Field = props => {
	const {name, input} = props

	return <Grid item xs={12} md={12} lg={12} xl={12}>
		<Grid container>
			<Grid item xs={12} md={3} lg={3} xl={3} className={styles.fieldNameWrapper}>
				{name && <div className={styles.fieldName}>{name}</div>}
			</Grid>
			<Grid item xs={12} md={9} lg={9} xl={9}>
				{input}
			</Grid>
		</Grid>
	</Grid>
}

const Order = props => {
	const {basicTransferInfo, className, classes = {}, ...rest} = props;

	const [dateValue, setDateValue] = useState(basicTransferInfo.when)
	const [passengers, setPassengers] = useState(1)
	const [activeTransport, setActiveTranspot] = useState(0)
	const [moreStops, setMoreStops] = useState(false)
	const [nonstandardBaggage, setNonstandardBaggage] = useState(false)
	const [phoneValue, setPhoneValue] = useState("")
	const [emailValue, setEmailValue] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const onIncrease = useCallback(() => {
		const newPassengers = passengers + 1
		setPassengers(newPassengers)
		if (newPassengers > transports[activeTransport].spaciousness && activeTransport !== transports.length - 1) {
			setActiveTranspot(activeTransport + 1)
		}
	}, [activeTransport, passengers])
	const onDecrease = () => {
		if (passengers > 1) {
			setPassengers(value => value - 1)
		}
	}
	const onChangeMoreStops = () => setMoreStops(value => !value)
	const onChangeNonstandardBaggage = () => setNonstandardBaggage(value => !value)
	const onChangePhone = e => {
		const value = e.target.value
		if (/^[+()\d\s]*$/.test(value)) {
			setPhoneValue(value)
		}
	}
	const onChangeEmail = e => {
		const value = e.target.value
		if (/^[a-zA-Z0-9.!@#$%&'*+/=?^_`{|}~-]*$/.test(value)) {
			setEmailValue(value)
		}
	}
	const checkFilled = useCallback(language => {
		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(emailValue.trim())) {
			alert(language.wrongEmail)
			return false
		}
		if (!/^[+()\d\s]{6,}$/.test(phoneValue.trim())) {
			alert(language.wrongPhone)
			return false
		}
		return true
	}, [emailValue, phoneValue])
	const order = useCallback(async language => {
		if (!checkFilled(language)) return;
		setIsLoading(true)
		const response = await requestTransfer({
			from: basicTransferInfo.from.name,
			to: basicTransferInfo.to.name,
			date: basicTransferInfo.date.toLocaleDateString(),
			passengers: passengers,
			transport: transports[activeTransport].name,
			more_stops: moreStops ? 1 : 0,
			nonstandard_baggage: nonstandardBaggage ? 1 : 0,
			email: emailValue,
			phone: phoneValue,
			price: calcPrice(basicTransferInfo.distance) + (activeTransport === 3 ? 5 : 0),
			distance: basicTransferInfo.distance,
			lang: language.code,
		})
		setIsLoading(false)
		if (response.status) {
			alert(language.yourOrderCopleted)
		}
		else {
			alert(language.orderError)
		}
	}, [activeTransport, basicTransferInfo, emailValue, phoneValue, moreStops, nonstandardBaggage, checkFilled, passengers])

	return (
		<LanguageContext.Consumer>
			{({language}) => (
				<div {...rest} className={classnames(styles.root, className, classes.root)}>
					<Space height={120} />
					<Container>
						<Title align="left">{language.completeOrder}</Title>


						<Grid container>
							<Grid item xs={12} sm={10} md={10} lg={9} xl={9}>
								<Space height={24} />
								<Divider style={{backgroundColor: "rgba(255, 255, 255, .2)"}} />
								<Space height={36} />

								<Grid
									container
									spacing={3}
								>
									<Field
										name={`${language.from}:`}
										input={<TextField
											label={language.from}
											leftIcon={LocationOnIcon}
											value={basicTransferInfo.from.name}
											disabled
										/>}
									/>
									<Field
										name={`${language.to}:`}
										input={<TextField
											label={language.to}
											leftIcon={LocationOnIcon}
											value={basicTransferInfo.to.name}
											disabled
										/>}
									/>
									<Grid item xs={12} md={12} lg={12} xl={12}>
									<Field
										input={<iframe
											title="map"
											width="100%"
											height="300"
											frameBorder="0"
											style={{border: 0, backgroundColor: "#cccccc"}}
											src={`https://www.google.com/maps/embed/v1/directions
												?key=AIzaSyBkoPcPCOL9Voy_RiTipREFq8zwg1pE_PM
												&origin=${basicTransferInfo.from.points.join("+")}
												&destination=${basicTransferInfo.to.points.join("+")}
											`}
										/>}
									/>
									</Grid>
									<Field
										name={`${language.when}:`}
										input={<DatePicker
											label={language.when}
											value={dateValue}
											onChange={value => setDateValue(value)}
										/>}
									/>

									<Field
										name={`${language.passengers}:`}
										input={<Counter
											value={passengers}
											minValue={1}
											onIncrease={onIncrease}
											onDecrease={onDecrease}
										/>}
									/>
									<Field
										name={`${language.transportType}:`}
										input={<Grid
											container
											spacing={2}
										>
											{transports.map((item, index) => (
												<Grid key={item.name} item xs={12} sm={12} md={6} lg={6} xl={6}>
													<TransportCard
														{...item}
														disabled={index === transports.length - 1 ? false : passengers > item.spaciousness}
														active={activeTransport === index}
														onClick={() => setActiveTranspot(index)}
													/>
												</Grid>
											))}
										</Grid>}
									/>
									<Field
										name={`${language.otherOptions}:`}
										input={<Grid
											container
											className={styles.otherOptions}
											spacing={2}
										>
											<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
												<FormControlLabel
													classes={{
														root: styles.fc,
														label: styles.label,
													}}
													control={<Checkbox
														name="more_stops"
														className={styles.checkbox}
														//size="small"
													/>}
													checked={moreStops}
													onChange={onChangeMoreStops}
													label={language.wantMoreStops}
												/>
											</Grid>
											<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
												<FormControlLabel
													classes={{
														root: styles.fc,
														label: styles.label,
													}}
													control={<Checkbox
														name="nonstandard_baggage"
														className={styles.checkbox}
														//size="small"
													/>}
													checked={nonstandardBaggage}
													onChange={onChangeNonstandardBaggage}
													label={language.nonstandardBaggage}
												/>
											</Grid>
										</Grid>}
									/>
								</Grid>
								
								<Space height={30} />
								<Divider style={{backgroundColor: "rgba(255, 255, 255, .2)"}} />
								<Space height={30} />
								
								<Grid
									container
									spacing={3}
								>
									<Field
										name={`${language.yourPhone}:`}
										input={<TextField
											label={language.yourPhone}
											value={phoneValue}
											onChange={onChangePhone}
										/>}
									/>
									<Field
										name={`${language.yourEmail}:`}
										input={<TextField
											label={language.yourEmail}
											value={emailValue}
											onChange={onChangeEmail}
										/>}
									/>
									<Field
										name={`${language.total}:`}
										input={<div className={styles.total}>
											<div className={styles.distance}>{basicTransferInfo.distance.toLocaleString()} km</div>
											<div className={styles.price}>${calcPrice(basicTransferInfo.distance) + (activeTransport === 3 ? 5 : 0)}</div>
										</div>}
									/>
									<Field
										input={<Button
											variant="accent"
											fullWidth
											onClick={() => order(language)}
											iconBefore={NearMeIcon}
											isLoading={isLoading}
											//disabled={!checkFilled()}
										>{language.order}</Button>}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Container>
					<Space height={100} />
				</div>
			)}
		</LanguageContext.Consumer>
	);
}

export default Order;