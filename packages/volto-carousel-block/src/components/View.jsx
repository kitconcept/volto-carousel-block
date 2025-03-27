import React from 'react';
import cx from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './DotsAndArrows';
import { DotButton, useDotButton } from './DotsAndArrows';
import DefaultBody from '@plone/volto/components/manage/Blocks/Teaser/DefaultBody';

const View = (props) => {
  const { data, className, isEditMode } = props;
  const itemsToShow = data.items_to_show || '4';
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: data.loop || false,
    slidesToScroll: 1,
    align: 'start',
  });

  const { prevBtnDisabled, nextBtnDisabled, scrollPrev, scrollNext } =
    usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const columns =
    data.columns?.length < itemsToShow ? data.columns?.length : itemsToShow;

  return (
    <div
      className={cx(
        'block',
        data['@type'],
        {
          one: columns === '1',
          two: columns === '2',
          three: columns === '3',
          four: columns === '4',
        },
        className,
      )}
    >
      {data.headline && <h2 className="headline">{data.headline}</h2>}
      <div className="carousel-wrapper">
        {data.columns?.length > itemsToShow && (
          <>
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </>
        )}
        <div className="carousel-viewport" ref={emblaRef}>
          <div className="carousel-container">
            {data.columns?.map((columnData) => {
              // since `hide_description` is a block-level setting,
              // we need to add it to the column data before we pass it to the
              // `DefaultBody` component.
              const newColumnData = {
                ...columnData,
                hide_description: data.hide_description,
              };
              return (
                <DefaultBody
                  key={newColumnData['@id']}
                  data={newColumnData}
                  isEditMode={isEditMode}
                />
              );
            })}
          </div>
        </div>
      </div>
      {data.columns?.length > itemsToShow && (
        <div className="carousel-dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'carousel-dot'.concat(
                index === selectedIndex ? ' carousel-dot--selected' : '',
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default View;
