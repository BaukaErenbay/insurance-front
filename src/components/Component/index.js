import React, {useState, useEffect} from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

const Component = props => {
	const {className, classes = {}, ...rest} = props;
	const [state, setState] = useState(0);

	return (
		<div {...rest} className={classnames(styles.root, className, classes.root)}>
			
		</div>
	);
}

export default Component;