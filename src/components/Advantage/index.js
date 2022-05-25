import React from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

const Advantage = props => {
	const {color, image, title, subtitle, className, classes = {}, ...rest} = props;

	return (
		<div
			{...rest}
			className={classnames(styles.root, className, classes.root)}
			style={{backgroundColor: color}}
		>
			<img src={image} alt="" className={styles.image} />
			<div className={styles.title}>{title}</div>
			<div className={styles.subtitle}>{subtitle}</div>
		</div>
	);
}

export default Advantage;