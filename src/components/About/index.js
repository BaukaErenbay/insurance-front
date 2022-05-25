import React from "react"
import classnames from "classnames"
import LanguageContext from "../Contexts/LanguageContext"

import Space from "../Space"
import Title from "../Title"
import GalleryCarousel from "../GalleryCarousel"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import styles from "./index.module.scss"

const slides = []
for (let i = 0; i < 3; i++) {
	slides.push(require(`../../img/people/(${i}).jpg`).default)
}

const About = props => {
	const {className, classes = {}, ...rest} = props

	return (
		<LanguageContext.Consumer>
			{({language, changeLanguage}) => (
				<Container className={classnames(styles.root, className, classes.root)} {...rest}>
					<Title>{language.aboutUs}</Title>
					<Space height={45} />
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} md={5} lg={5} className={styles.text}>
							<p>{language.aboutUsP1}</p>
							<p>{language.aboutUsP2}</p>
						</Grid>
						<Grid item xs={12} sm={12} md={7} lg={7}>
							<GalleryCarousel slides={slides} />
						</Grid>
					</Grid>
				</Container>
			)}
		</LanguageContext.Consumer>
	)
}

export default About
