import React from "react";

import classnames from 'classnames';

import styles from "./index.module.scss";

const Space = props => {
	let {height = 0, className, ...rest} = props;

	return (
		<div style={{height: `${height}px`}} className={classnames(className, styles.root)} {...rest} />
	);
}

export default Space;
