import React, {useState, useCallback} from "react"
import classnames from "classnames"
import LanguageContext from "../Contexts/LanguageContext"
import {requestCallback} from "../../js/api"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Space from "../Space"
import Title from "../Title"
import TextField from "../TextField"
import Button from "../Button"

import PhoneIcon from "@material-ui/icons/Phone"
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import ViberIcon from "../icons/Viber"

import styles from "./index.module.scss"

const Callback = props => {
	const {className, classes = {}, ...rest} = props

	const [phoneValue, setPhoneValue] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const onChangePhone = e => {
		const value = e.target.value
		if (/^[+()\d\s]*$/.test(value)) {
			setPhoneValue(value)
		}
	}

	const validatePhone = phone => {
		return /^[+()\d\s]{6,}$/.test(phone.trim())
	}

	const onRequestCallback = useCallback(
		async language => {
			setIsLoading(true)
			try {
				const response = await requestCallback({
					phone: phoneValue,
					lang: language.code,
				})
				setIsLoading(false)
				if (response.status) {
					setPhoneValue("")
					alert(language.successCallbackOrder)
				} else {
					alert(language.smthWentWrong)
				}
			} catch (e) {
				alert(language.smthWentWrong)
				setIsLoading(false)
			}
		},
		[phoneValue]
	)

	return (
		<LanguageContext.Consumer>
			{({language, changeLanguage}) => (
				<div {...rest} className={classnames(styles.root, className, classes.root)}>
					<Container>
						<Title className={styles.title}>{language.wantDirectCall}</Title>
						<Space height={50} />
						<Grid container spacing={1} justify="center">
							<Grid item xs={12} sm={6} md={7} lg={5}>
								<TextField
									label={language.yourPhone}
									leftIcon={PhoneIcon}
									value={phoneValue}
									onChange={onChangePhone}
								/>
							</Grid>
							<Grid item xs={12} sm={4} md={3} lg={3}>
								<Button
									variant="primary"
									fullWidth
									iconBefore={PhoneCallbackIcon}
									disabled={!validatePhone(phoneValue)}
									onClick={() => onRequestCallback(language)}
									isLoading={isLoading}
								>
									{language.callMeBack}
								</Button>
							</Grid>
						</Grid>
						<Grid container spacing={1}>
							<Space height={40} />
							<Grid item xs={12} sm={1} md={1} lg={2} />
							<Grid item xs={12} sm={6} md={7} lg={5} className={styles.text}>
								{language.haveNoTime}
							</Grid>
							<Grid item xs={12} sm={4} md={3} lg={3}>
								<Grid container spacing={1}>
									<Grid item xs={12} sm={12} md={12} lg={12}>
										<Button
											variant="white-outlined"
											fullWidth
											iconBefore={WhatsAppIcon}
											href="https://wa.me/905316287633"
										>
											WhatsApp
										</Button>
									</Grid>
									<Grid item xs={12} sm={12} md={12} lg={12}>
										<Button
											variant="white-outlined"
											fullWidth
											iconBefore={ViberIcon}
											href="viber://chat?number=905316287633"
										>
											Viber
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</div>
			)}
		</LanguageContext.Consumer>
	)
}

export default Callback
