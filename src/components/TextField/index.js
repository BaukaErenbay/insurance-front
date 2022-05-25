import React from "react";
import classnames from "classnames";

import TextField from '@material-ui/core/TextField';

import styles from "./index.module.scss";

const TextField_ = props => {
	const {InputProps, InputLabelProps, placeholder, leftIcon: LeftIcon, className, classes = {}, ...rest} = props;

	return (
		<div className={styles.wrapper}>
			{LeftIcon && <LeftIcon className={styles.leftIcon} />}
			<TextField
				className={classnames(styles.root, className, classes.root)}
				InputProps={{
					classes: {
						root: styles.InputRoot,
					},
					...InputProps,
				}}
				InputLabelProps={{
					classes: {
						root: styles.labelRoot,
						focused: styles.labelFocused,
					},
					...InputLabelProps,
				}}
				inputProps={{
					className: styles.inputRoot,
				}}
				fullWidth
				variant="filled"
				{...rest}
			/>
		</div>
	);
}

export default TextField_;