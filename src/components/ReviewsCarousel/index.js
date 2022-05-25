import React, {useState, useEffect, useCallback, Fragment} from "react";
import classnames from "classnames";
import { useEmblaCarousel } from "embla-carousel/react";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import styles from "./index.module.scss";

const PrevButton = ({ enabled, onClick }) => (
	<ChevronLeftIcon
		className={classnames(styles.button, styles.prev)}
		onClick={onClick}
		disabled={!enabled}
	/>
);

const NextButton = ({ enabled, onClick }) => (
	<ChevronRightIcon
		className={classnames(styles.button, styles.next)}
		onClick={onClick}
		disabled={!enabled}
	/>
);

const ReviewsCarousel = props => {
	const {slides, className, classes = {}, ...rest} = props;

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [slidesToScroll, setSlidesToScroll] = useState(window.innerWidth < 768 ? 1 : 2);

	const [viewportRef, embla] = useEmblaCarousel({ slidesToScroll: slidesToScroll });

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

	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth < 768 && slidesToScroll === 2) {
				setSlidesToScroll(1)
			}
			else if (window.innerWidth >= 768 && slidesToScroll === 1) {
				setSlidesToScroll(2)
			}
		}
		window.addEventListener("resize", onResize)
		return () => {
			window.removeEventListener("resize", onResize)
		}
	}, [embla, slidesToScroll])

	useEffect(() => {
		embla && embla.reInit({ slidesToScroll: slidesToScroll })
	}, [embla, slidesToScroll])

	return (
		<Fragment>
			<div {...rest} className={classnames(styles.root, className, classes.root)} ref={viewportRef}>
				<div className={styles.container}>
					{slides}
				</div>
				<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
				<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
			</div>
		</Fragment>
	);
}

export default ReviewsCarousel;