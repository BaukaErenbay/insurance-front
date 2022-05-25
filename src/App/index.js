import React, {Fragment, useState, useCallback, useEffect} from "react"
import Helmet from "react-helmet"
import {/*reachGoal, */ getLanguage} from "../js/utils"
import LanguageContext from "../components/Contexts/LanguageContext"
import {Route, /*Link,*/ Switch, withRouter, Redirect, useLocation} from "react-router-dom"
import useApi from "../api/useApi"

import Header from "../components/Header"
import Space from "../components/Space"
import About from "../components/About"
import FirstScreen from "../components/FirstScreen"
import Advantages from "../components/Advantages"
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"
import Reviews from "../components/Reviews"
import Callback from "../components/Callback"
import QnA from "../components/QnA"
import Footer from "../components/Footer"
import Order from "../components/Order"
import TextField2 from "../components/TextField2"
import Title from "../components/Title"
import Button from "../components/Button"
import Grid from "@material-ui/core/Grid"

import EmailIcon from "@material-ui/icons/Email"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import PhoneIcon from "@material-ui/icons/Phone"
import LockIcon from "@material-ui/icons/Lock"

import styles from "./index.module.scss"

const App = props => {
	const [language, setLanguage] = useState(
		getLanguage(window.localStorage.getItem("language") || "ru")
	)
	const {pathname} = useLocation()
	const {setToken, get, signin, signup, update} = useApi()
	const [isLoading, setIsLoading] = useState(false)

	const [basicTransferInfo, setBasicTransferInfo] = useState(null)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [name, setName] = useState("")
	const [secondname, setSecondname] = useState("")
	const [phone, setPhone] = useState("")

	const changeLanguage = useCallback(lang => {
		window.localStorage.setItem("language", lang)
		setLanguage(getLanguage(lang))
	}, [])

	const headerItems = [
		{
			title: language.aboutUs,
			anchor: "about",
		},
		{
			title: language.reviews,
			anchor: "reviews",
		},
		{
			title: language.callback,
			anchor: "callback",
		},
		{
			title: language.faq,
			anchor: "faq",
		},
		{
			title: (
				<a href="/signin" className={styles.t}>
					Вход
				</a>
			),
			anchor: "contacts",
		},
		{
			title: (
				<a href="/signup" className={styles.t}>
					Регистрация
				</a>
			),
			anchor: "contacts",
		},
	]

	const putAnchor = anchorName => {
		const headerItem = headerItems.find(item => item.anchor === anchorName)
		return <a href={`#${headerItem.anchor}`} name={headerItem.anchor} />
	}

	const onSignin = useCallback(
		async e => {
			e.preventDefault()
			if (email.length < 3) {
				alert("Введите правильный email")
				return
			}
			if (password.length < 6) {
				alert("Слишком короткий пароль")
				return
			}
			setIsLoading(true)
			const {status, data} = await signin({email, password})
			if (status) {
				setToken({token: data.id})
				window.location.href = "/cabinet"
			} else {
				alert("Ошибка при входе. Проверьте логи и пароль.")
			}
			setIsLoading(false)
		},
		[email, password, signin, setToken]
	)

	const onSignup = useCallback(
		async e => {
			e.preventDefault()
			if (email.length < 3) {
				alert("Введите правильный email")
				return
			}
			if (password.length < 6) {
				alert("Слишком короткий пароль")
				return
			}
			setIsLoading(true)
			const {status, data} = await signup({email, password})
			if (status) {
				setToken({token: data.id})
				window.location.href = "/cabinet"
			} else {
				alert("Ошибка при регистрации")
			}
			setIsLoading(false)
		},
		[email, password, signin]
	)

	const onUpdate = useCallback(
		async e => {
			e.preventDefault()
			if (email.length < 3) {
				alert("Введите правильный email")
				return
			}
			setIsLoading(true)
			const {status, data} = await update({email, name, secondname, phone})
			if (status) {
				window.location.href = "/cabinet"
			} else {
				alert("Ошибка при обновлении данных")
			}
			setIsLoading(false)
		},
		[email, name, secondname, phone, update]
	)

	useEffect(() => {
		if (pathname !== "/cabinet") return
		;(async () => {
			const {status, data} = await get()
			if (status) {
				setEmail(data.email)
				setPhone(data.phone)
				setName(data.name)
				setSecondname(data.secondname)
			} else {
				window.location.href = "/"
			}
		})()
	}, [pathname, get])

	return (
		<LanguageContext.Provider
			value={{
				language: language,
				setLanguage: changeLanguage,
			}}
		>
			<Fragment>
				<Helmet>
					<title>{language.title}</title>
				</Helmet>

				<Header position="fixed" items={headerItems} />

				<Switch>
					<Route
						path="/"
						exact
						render={() => (
							<Fragment>
								<FirstScreen />
								{putAnchor("about")}
								<Space height={60} />
								<About />
								<Space height={60} />
								<Advantages />
								<Space height={60} />
								<Container>
									<Divider style={{backgroundColor: "rgba(255, 255, 255, .2)"}} />
								</Container>
								{putAnchor("reviews")}
								<Space height={60} />
								<Reviews />
								{putAnchor("callback")}
								<Space height={60} />
								<Callback />
								{putAnchor("faq")}
								<Space height={60} />
								<QnA />
								<Space height={160} />
							</Fragment>
						)}
					/>

					<Route
						path="/signin"
						exact
						render={() => (
							<div className={styles.container}>
								<Space height={60} />
								<form onSubmit={onSignin} className={styles.form}>
									<Title noShadow>Вход</Title>
									<Space height={40} />
									<TextField2
										label="Email"
										leftIcon={EmailIcon}
										value={email}
										onChange={e => setEmail(e.target.value)}
										type="email"
									/>
									<Space height={20} />
									<TextField2
										label="Пароль"
										leftIcon={LockIcon}
										value={password}
										onChange={e => setPassword(e.target.value)}
										type="password"
									/>
									<Space height={40} />
									<Button
										variant="main"
										type="submit"
										fullWidth
										isLoading={isLoading}
									>
										Войти
									</Button>
								</form>
								<Space height={160} />
							</div>
						)}
					/>

					<Route
						path="/signup"
						exact
						render={() => (
							<div className={styles.container}>
								<Space height={60} />
								<form onSubmit={onSignup} className={styles.form}>
									<Title noShadow>Регистрация</Title>
									<Space height={40} />
									<TextField2
										label="Email"
										leftIcon={EmailIcon}
										value={email}
										onChange={e => setEmail(e.target.value)}
										type="email"
									/>
									<Space height={20} />
									<TextField2
										label="Пароль"
										leftIcon={LockIcon}
										value={password}
										onChange={e => setPassword(e.target.value)}
										type="password"
									/>
									<Space height={40} />
									<Button
										variant="main"
										type="submit"
										fullWidth
										isLoading={isLoading}
									>
										Зарегистрироваться
									</Button>
								</form>
								<Space height={160} />
							</div>
						)}
					/>

					<Route
						path="/cabinet"
						exact
						render={() => (
							<div className={styles.container} style={{maxWidth: "800px"}}>
								<Space height={60} />
								<form onSubmit={onUpdate} className={styles.form}>
									<Title noShadow>Мои данные</Title>
									<Space height={50} />
									<Grid container spacing={4}>
										<Grid item xs={12} sm={12} md={6} lg={6}>
											<TextField2
												label="Имя"
												leftIcon={AccountCircleIcon}
												value={name}
												onChange={e => setName(e.target.value)}
												type="name"
											/>
										</Grid>
										<Grid item xs={12} sm={12} md={6} lg={6}>
											<TextField2
												label="Фамилия"
												leftIcon={AccountCircleIcon}
												value={secondname}
												onChange={e => setSecondname(e.target.value)}
												type="secondname"
											/>
										</Grid>
										<Grid item xs={12} sm={12} md={6} lg={6}>
											<TextField2
												label="Email"
												leftIcon={EmailIcon}
												value={email}
												onChange={e => setEmail(e.target.value)}
												type="email"
											/>
										</Grid>
										<Grid item xs={12} sm={12} md={6} lg={6}>
											<TextField2
												label="Телефон"
												leftIcon={PhoneIcon}
												value={phone}
												onChange={e => setPhone(e.target.value)}
												type="phone"
											/>
										</Grid>
									</Grid>
									<Space height={50} />
									<Button variant="main" type="submit" isLoading={isLoading}>
										Обновить данные
									</Button>
								</form>
								<Space height={160} />
							</div>
						)}
					/>

					<Route exact path="*" render={props => <Redirect to="/" />} />
				</Switch>

				<Footer sections={headerItems} />
			</Fragment>
		</LanguageContext.Provider>
	)
}

export default withRouter(App)
