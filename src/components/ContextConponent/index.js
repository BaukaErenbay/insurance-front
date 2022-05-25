import React, {useState, useEffect} from "react";
import classnames from "classnames";
import LanguageContext from "../Contexts/LanguageContext";

import styles from "./index.module.scss";

const Component = props => {
	const {className, classes = {}, ...rest} = props;
	const [state, setState] = useState(0);

	return (
		<LanguageContext.Consumer>
			{({language, changeLanguage}) => (
				<div {...rest} className={classnames(styles.root, className, classes.root)}>
					
				</div>
			)}
		</LanguageContext.Consumer>
	);
}

export default Component;