import React from "react";
import classnames from "classnames";
import LanguageContext from "../Contexts/LanguageContext";

import Space from "../Space";
import Title from "../Title";
import ReviewsCarousel from "../ReviewsCarousel";
import Review from "../Review";
import Container from '@material-ui/core/Container';

import styles from "./index.module.scss";

const Reviews = props => {
	const {className, classes = {}, ...rest} = props;

	return (
		<LanguageContext.Consumer>
			{({language}) => {
				const reviews = [
					{
						name: language.name1,
						rating: 5,
						comment: language.comment1,
					},
					{
						name: language.name2,
						rating: 5,
						comment: language.comment2,
					},
					{
						name: language.name3,
						rating: 5,
						comment: language.comment3,
					},
					{
						name: language.name4,
						rating: 5,
						comment: language.comment4,
					},
					{
						name: language.name5,
						rating: 5,
						comment: language.comment5,
					},
				]
				return <Container {...rest} className={classnames(styles.root, className, classes.root)}>
					<Title>{language.reviews}</Title>
					<Space height={50} />
					<ReviewsCarousel slides={reviews.map(item => <Review key={item.name} {...item} />)} />
				</Container>
			}}
		</LanguageContext.Consumer>
	);
}

export default Reviews;