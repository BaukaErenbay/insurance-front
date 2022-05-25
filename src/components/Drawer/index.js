import React from "react";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import styles from "./index.module.scss";

const Drawer_ = props => {
	const {items, open, setDrawerIsOpen} = props;

	return (
		<Drawer
			open={open}
			onClose={() => setDrawerIsOpen(false)}
			anchor="right"
			classes={{
				paper: styles.paper
			}}
		>
			<div className={styles.header}>
				<IconButton onClick={() => setDrawerIsOpen(false)}>
					<ArrowForwardIcon className={styles.closeIcon} />
				</IconButton>
			</div>
			<Divider className={styles.divider} />
			<List>
				{items.map(item => (
					<a
						key={item.title}
						href={`/#${item.anchor}`}
						className={styles.a}
						onClick={() => setDrawerIsOpen(false)}
					>
						<ListItem className={styles.listItem}>
							<ListItemText>{item.title}</ListItemText>
						</ListItem>
					</a>
				))}
			</List>
		</Drawer>
	);
}

export default Drawer_;