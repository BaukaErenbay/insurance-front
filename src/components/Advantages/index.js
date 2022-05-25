import React from "react"
import classnames from "classnames"
import LanguageContext from "../Contexts/LanguageContext"

import Advantage from "../Advantage"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import styles from "./index.module.scss"

const Advantages = props => {
	const {className, classes = {}, ...rest} = props

	return (
		<LanguageContext.Consumer>
			{({language}) => {
				const advantages = [
					{
						image: require("../../img/advantages/brilliant.svg").default,
						title: language.qualityTitle,
						subtitle: language.qualitySubtitle,
						color: "rgb(16, 109, 139)",
					},
					{
						image: require("../../img/advantages/home.svg").default,
						title: language.economyTitle,
						subtitle: language.economySubtitle,
						color: "rgb(29, 133, 166)",
					},
					{
						image: require("../../img/advantages/driver.svg").default,
						title: language.safeTitle,
						subtitle: language.safeSubtitle,
						color: "rgb(24, 154, 195)",
					},
					{
						image: require("../../img/advantages/health.svg").default,
						title: language.fastTitle,
						subtitle: language.fastSubtitle,
						color: "rgb(15, 176, 227)",
					},
				]
				return (
					<Container
						{...rest}
						className={classnames(styles.root, className, classes.root)}
					>
						<Grid container spacing={2}>
							{advantages.map(item => (
								<Grid key={item.title} item xs={6} sm={6} md={3} lg={3}>
									<Advantage {...item} />
								</Grid>
							))}
						</Grid>
					</Container>
				)
			}}
		</LanguageContext.Consumer>
	)
}

export default Advantages
