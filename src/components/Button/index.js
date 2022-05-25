import React from "react";
import classnames from 'classnames';

import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from "./index.module.scss";

const Button_ = props => {
	let {iconButton, fullWidth, children, iconAfter: IconAfter, iconBefore: IconBefore, variant, isLoading, className, ...rest} = props;

	return (
		<Button
			{...rest}
			data-variant={variant}
			className={classnames(styles.root, className)}
			data-loading={isLoading}
			data-fullwidth={fullWidth}
			data-iconbutton={iconButton}
		>
			{IconBefore && <IconBefore className={styles.iconBefore} />}
			<CircularProgress className={styles.preloader} size={20} thickness={4.5} />
			<span className={styles.label}>{children}</span>
			{IconAfter && <IconAfter className={styles.iconAfter} />}
		</Button>
	);
}

export default Button_;