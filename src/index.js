import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider, MuiThemeProvider, createMuiTheme, createGenerateClassName } from "@material-ui/core/styles";
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#FF9800",
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
	shape: {
		borderRadius:1
	},
	typography: {
		fontSize: 16,
		fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
	}
});
const generateClassName = createGenerateClassName();

ReactDOM.render(
	<React.StrictMode>
		<StylesProvider injectFirst generateClassName={generateClassName}>
			<MuiThemeProvider theme={theme}>
				<Router>
					<ScrollToTop>
						<App />
					</ScrollToTop>
				</Router>
			</MuiThemeProvider>
		</StylesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
