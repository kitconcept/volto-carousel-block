import React from 'react';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';
import config from '@plone/volto/registry';
import cx from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';

const View = (props) => {
  const { data, path, className } = props;
  const metadata = props.metadata || props.properties;
  if (data.blocks_layout === undefined) {
    return null;
  }
  const columns = data.blocks_layout.items;
  const blocksConfig =
    config.blocks.blocksConfig[data['@type']].blocksConfig ||
    props.blocksConfig;
  const location = {
    pathname: path,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  React.useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  console.log(data);

  return (
    <div className={cx('block carousel', className)}>
      <div className="carousel-wrapper">
        <div className="carousel-viewport" ref={emblaRef}>
          <div className="carousel-container">
            <RenderBlocks
              {...props}
              metadata={metadata}
              content={data}
              location={location}
              blocksConfig={blocksConfig}
              isContainer
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
