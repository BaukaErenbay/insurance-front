import React from "react"
import classnames from "classnames"
import LanguageContext from "../Contexts/LanguageContext"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Space from "../../components/Space"

import PhoneIcon from "@material-ui/icons/Phone"
import InstagramIcon from "@material-ui/icons/Instagram"
import MailIcon from "@material-ui/icons/Mail"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import ViberIcon from "../icons/Viber"

import styles from "./index.module.scss"

const Footer = props => {
	const {sections, className, classes = {}, ...rest} = props
	const contacts = [
		{
			name: "+7 747 250 17 97",
			href: "tel:+77472501797",
			icon: PhoneIcon,
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/insurance/",
			icon: InstagramIcon,
		},
		{
			name: "WhatsApp",
			href: "https://wa.me/77472501797",
			icon: WhatsAppIcon,
		},
		{
			name: "Viber",
			href: "viber://chat?number=77472501797",
			icon: ViberIcon,
		},
		{
			name: "insurance@gmail.com",
			href: "mailto:insurance@gmail.com",
			icon: MailIcon,
		},
	]
	const languages = [
		{
			code: "ru",
			name: "Русский",
			icon: require("../../img/languages/ru.png").default,
		},
		{
			code: "en",
			name: "English",
			icon: require("../../img/languages/en.png").default,
		},
		{
			code: "tr",
			name: "Türkçe",
			icon: require("../../img/languages/tr.png").default,
		},
	]

	return (
		<LanguageContext.Consumer>
			{({language, setLanguage}) => (
				<div {...rest} className={classnames(styles.root, className, classes.root)}>
					<Container>
						<Grid container spacing={5}>
							<Grid item xs={12} md={4} lg={3} xl={3}>
								<div className={styles.title}>{language.contacts}</div>
								{contacts.map(item => (
									<a
										className={styles.listItem}
										href={item.href}
										target="_blank"
										rel="noreferrer"
										key={item.href}
									>
										<item.icon className={styles.icon} />
										<span className={styles.listItemText}>{item.name}</span>
									</a>
								))}
							</Grid>
							<Grid item xs={12} md={4} lg={3} xl={3}>
								<div className={styles.title}>{language.sitemap}</div>
								{sections.map(item => (
									<a
										key={item.anchor}
										className={styles.listItem}
										href={`/#${item.anchor}`}
									>
										<span className={styles.listItemText}>{item.title}</span>
									</a>
								))}
							</Grid>
							<Grid item xs={12} md={4} lg={3} xl={3}>
								<div className={styles.title}>{language.payment}</div>
								<img
									className={styles.paymentImage}
									src={require("../../img/other/payment.png").default}
									alt="visa mastercard"
								/>
							</Grid>
							{/*<Grid item xs={12} md={4} lg={3} xl={3}>
								<div className={styles.title}>{language.siteLang}</div>
								{languages.map(item => (
									<div
										key={item.code}
										className={styles.listItem}
										onClick={() => setLanguage(item.code)}
									>
										<img
											className={styles.icon}
											src={item.icon}
											alt={item.code}
										/>
										<span
											className={styles.listItemText}
											style={{
												textDecoration:
													language.code === item.code
														? "underline"
														: "none",
											}}
										>
											{item.name}
										</span>
									</div>
								))}
							</Grid>*/}
						</Grid>
						<Space height={60} />
						<Divider className={styles.divider} />
						<Space height={60} />
						<div className={styles.copyright}>© INSURANCE 2022</div>
					</Container>
				</div>
			)}
		</LanguageContext.Consumer>
	)
}

export default Footer
