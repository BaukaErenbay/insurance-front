import React from "react"
import classnames from "classnames"

import styles from "./index.module.scss"

const Title = props => {
	const {align = "center", noShadow, children, className, classes = {}, ...rest} = props

	return (
		<h1
			{...rest}
			className={classnames(styles.root, className, classes.root)}
			data-align={align}
			data-noshadow={noShadow}
		>
			{children}
		</h1>
	)
}

export default Title
