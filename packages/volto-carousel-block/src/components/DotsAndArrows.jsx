import { useState, useCallback, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import rightArrowSVG from '@plone/volto/icons/right-key.svg';
import leftArrowSVG from '@plone/volto/icons/left-key.svg';

const messages = defineMessages({
  prevButton: {
    id: 'Previous slide',
    defaultMessage: 'Previous slide',
  },
  nextButton: {
    id: 'Next slide',
    defaultMessage: 'Next slide',
  },
  goToSlide: {
    id: 'Go to slide',
    defaultMessage: 'Go to slide',
  },
});

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export const DotButton = (props) => {
  const { children, index, ...restProps } = props;
  const intl = useIntl();

  return (
    <button
      type="button"
      {...restProps}
      aria-label={`${intl.formatMessage(messages.goToSlide)} ${index + 1}`}
    >
      {children}
    </button>
  );
};

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    scrollPrev,
    scrollNext,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;
  const intl = useIntl();

  return (
    <button
      className="carousel-button carousel-button-prev"
      type="button"
      aria-label={intl.formatMessage(messages.prevButton)}
      {...restProps}
    >
      <Icon name={leftArrowSVG} size="48px" />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;
  const intl = useIntl();

  return (
    <button
      className="carousel-button carousel-button-next"
      type="button"
      aria-label={intl.formatMessage(messages.nextButton)}
      {...restProps}
    >
      <Icon name={rightArrowSVG} size="48px" />
      {children}
    </button>
  );
};
