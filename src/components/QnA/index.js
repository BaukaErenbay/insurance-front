import React from "react"
import classnames from "classnames"
import LanguageContext from "../Contexts/LanguageContext"

import Space from "../Space"
import Title from "../Title"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import styles from "./index.module.scss"

const QnA = props => {
	const {className, classes = {}, ...rest} = props

	return (
		<LanguageContext.Consumer>
			{({language, changeLanguage}) => {
				const questions = [
					{
						question: language.question1,
						answer: language.answer1,
					},
					{
						question: language.question2,
						answer: language.answer2,
					},
					{
						question: language.question3,
						answer: language.answer3,
					},
					{
						question: language.question4,
						answer: language.answer4,
					},
				]

				return (
					<Container
						className={classnames(styles.root, className, classes.root)}
						{...rest}
					>
						<Title>{language.faq}</Title>
						<Space height={45} />

						<Grid container spacing={1} justify="center">
							<Grid item xs={12} sm={10} md={10} lg={8}>
								{questions.map((item, index) => (
									<Accordion key={item.question} className={styles.panel}>
										<AccordionSummary
											className={styles.summary}
											expandIcon={
												<ExpandMoreIcon className={styles.expandIcon} />
											}
										>
											{item.question}
										</AccordionSummary>
										<AccordionDetails className={styles.details}>
											{item.answer}
										</AccordionDetails>
									</Accordion>
								))}
							</Grid>
						</Grid>
					</Container>
				)
			}}
		</LanguageContext.Consumer>
	)
}

export default QnA
