import React, {useState, useEffect, useCallback, Fragment} from "react";
import classnames from "classnames";
import { useEmblaCarousel } from "embla-carousel/react";

import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import styles from "./index.module.scss";

const PrevButton = ({ enabled, onClick }) => (
	<IconButton
		className={classnames(styles.button, styles.prev)}
		onClick={onClick}
		disabled={!enabled}
		size="small"
	>
		<ChevronLeftIcon className={styles.icon} />
	</IconButton>
);

const NextButton = ({ enabled, onClick }) => (
	<IconButton
		className={classnames(styles.button, styles.next)}
		onClick={onClick}
		disabled={!enabled}
		size="small"
	>
		<ChevronRightIcon className={styles.icon} />
	</IconButton>
);

const GalleryCarousel = props => {
	const {slides, className, classes = {}, ...rest} = props;

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const [viewportRef, embla] = useEmblaCarousel();

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	useEffect(() => {
		if (!embla) return;
		embla.on("select", onSelect);
		onSelect();
	}, [embla, onSelect]);

	return (
		<Fragment>
			<div {...rest} className={classnames(styles.root, className, classes.root)} ref={viewportRef}>
				<div className={styles.container}>
					{slides.map((item, index) => (
						<div className={styles.slide} key={index}>
							<div className={styles.inner}>
								<img
									className={styles.img}
									src={item}
									alt=""
								/>
							</div>
						</div>
					))}
				</div>
				<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
				<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
			</div>
		</Fragment>
	);
}

export default GalleryCarousel;