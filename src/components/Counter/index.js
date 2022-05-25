import React from "react";
import classnames from "classnames";

import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import styles from "./index.module.scss";

const Counter = props => {
	const {value, minValue, maxValue, onIncrease, onDecrease, className, classes = {}, ...rest} = props;

	return (
		<div {...rest} className={classnames(styles.root, className, classes.root)}>
			<IconButton
				onClick={onDecrease}
				disabled={typeof minValue === "number" ? value === minValue : false}
			>
				<RemoveIcon className={styles.icon} />
			</IconButton>
			<div className={styles.number}>
				{value}
			</div>
			<IconButton
				onClick={onIncrease}
				disabled={typeof maxValue === "number" ? value === maxValue : false}
			>
				<AddIcon className={styles.icon} />
			</IconButton>
		</div>
	);
}

export default Counter;