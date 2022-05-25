import React from "react";
import classnames from "classnames";

import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import TextField from "../TextField";

import styles from "./index.module.scss";

const Autocomplete_ = props => {
	const {leftIcon, plceholder, label, className, classes = {}, ...rest} = props;

	return (
		<Autocomplete
			className={classnames(styles.root, className, classes.root)}
			getOptionLabel={option => option.label ? option.label : option}
			getOptionSelected={(option, value) => option.value === value}
			renderOption={option => <Typography variant="body2">{option.label}</Typography>}
			clearOnBlur
			//blurOnSelect
			renderInput={(params) => <TextField
				{...params}
				label={label}
				plceholder={plceholder}
				leftIcon={leftIcon}
			/>}
			{...rest}
		/>
	);
}

export default Autocomplete_;