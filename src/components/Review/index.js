import React from "react";
import classnames from "classnames";

import Rating from '@material-ui/lab/Rating';

import styles from "./index.module.scss";

const Advantage = props => {
	const {rating, comment, name, className, classes = {}, ...rest} = props;
	
	return (
		<div
			{...rest}
			className={classnames(styles.root, className, classes.root)}
		>
			<div className={styles.inner}>
				<div className={styles.name}>{name}</div>
				<Rating
					className={styles.rating}
					value={rating}
					readOnly
					//precision={.1}
				/>
				<div className={styles.comment}>{comment}</div>
			</div>
		</div>
	);
}

export default Advantage;