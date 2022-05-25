import React from "react";
import LanguageContext from "../Contexts/LanguageContext";

import { DatePicker, LocalizationProvider } from "@material-ui/pickers";
import DateFnsAdapter from "@material-ui/pickers/adapter/date-fns";
import ruLocale from "date-fns/locale/ru";
import trLocale from "date-fns/locale/tr";
import enLocale from "date-fns/locale/en-US";
import TextField from "../TextField";

const locale = ({
	ru: ruLocale,
	tr: trLocale,
	en: enLocale,
})

const DatePicker_ = props => {
	return (
		<LanguageContext.Consumer>
			{({language}) => (
				<LocalizationProvider dateAdapter={DateFnsAdapter} locale={locale[language.code]}>
					<DatePicker
						disableMaskedInput
						disablePast
						disableCloseOnSelect={false}
						renderInput={(props) => {
							props.helperText = undefined
							return <TextField {...props} />
						}}
						cancelText={language.datePickerCancel}
						{...props}
					/>
				</LocalizationProvider>
			)}
		</LanguageContext.Consumer>
	);
}

export default DatePicker_;