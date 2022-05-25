import React, {useState} from "react"
import classnames from "classnames"
import LanguageContext from "../Contexts/LanguageContext"
import {Link} from "react-router-dom"

import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Drawer from "../Drawer"

import MenuIcon from "@material-ui/icons/Menu"

import styles from "./index.module.scss"

const languageIcons = {
	ru: require("../../img/languages/ru.png").default,
	en: require("../../img/languages/en.png").default,
	tr: require("../../img/languages/tr.png").default,
}

const Component = props => {
	const {items, className, classes = {}, ...rest} = props
	const [drawerIsOpen, setDrawerIsOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const closeMenu = () => setAnchorEl(null)

	return (
		<LanguageContext.Consumer>
			{({language, setLanguage}) => (
				<div className={classnames(styles.root, className, classes.root)} {...rest}>
					<Container className={styles.container}>
						<Link to="/" className={styles.logoLink}>
							<img
								src={require("../../img/logo/logo.png").default}
								alt="logo"
								className={styles.logo}
							/>
						</Link>

						<div className={styles.right}>
							<div className={styles.items}>
								{items.map((item, index) =>
									typeof item.title === "string" ? (
										<a
											data-hide={index <= items.length - 3}
											key={item.anchor}
											href={`/#${item.anchor}`}
											className={styles.link}
										>
											{item.title}
										</a>
									) : (
										item.title
									)
								)}
							</div>

							{/*<div
								className={styles.languageWrapper}
								onClick={e => setAnchorEl(e.target)}
							>
								<img
									src={languageIcons[language.code]}
									alt="language"
									aria-controls="language-menu"
									className={styles.languageFlag}
								/>
								<div className={styles.languageCode}>{language.code}</div>
							</div>

							<IconButton
								className={styles.menuButton}
								onClick={() => setDrawerIsOpen(true)}
							>
								<MenuIcon className={styles.menuIcon} />
							</IconButton>*/}
						</div>
					</Container>

					{/*<Menu
						id="language-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={closeMenu}
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
					>
						<MenuItem onClick={() => {
							closeMenu()
							setLanguage("ru")
						}}><img src={languageIcons.ru} alt="" className={styles.menuFlag} /> Русский</MenuItem>
						<MenuItem onClick={() => {
							closeMenu()
							setLanguage("en")
						}}><img src={languageIcons.en} alt="" className={styles.menuFlag} /> English</MenuItem>
						<MenuItem onClick={() => {
							closeMenu()
							setLanguage("tr")
						}}><img src={languageIcons.tr} alt="" className={styles.menuFlag} /> Türkçe</MenuItem>
					</Menu>

					<Drawer
						open={drawerIsOpen}
						setDrawerIsOpen={setDrawerIsOpen}
						items={items}
					/>*/}
				</div>
			)}
		</LanguageContext.Consumer>
	)
}

export default Component
