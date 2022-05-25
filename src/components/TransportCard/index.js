import React from "react";
import classnames from "classnames";

import PersonIcon from '@material-ui/icons/Person';

import styles from "./index.module.scss";

const TransportCard = props => {
	const {onClick, name, spaciousness, image, active, disabled, className, classes = {}, ...rest} = props;

	return (
		<div
			className={classnames(styles.root, className, classes.root)}
			{...rest}
			data-active={active}
			data-disabled={disabled}
			onClick={disabled ? undefined : onClick}
		>
			<div className={styles.image}>
				<img src={image} alt="" />
			</div>
			<div className={styles.info}>
				<div className={styles.name}>{name}</div>
				<div className={styles.spaciousness}><PersonIcon className={styles.personIcon} /> x{spaciousness}</div>
			</div>
		</div>
	);
}

export default TransportCard;