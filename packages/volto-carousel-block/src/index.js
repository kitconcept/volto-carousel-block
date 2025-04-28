import { useIntl, defineMessages } from 'react-intl';
import CarouselEdit from '@kitconcept/volto-carousel-block/components/Edit';
import CarouselView from '@kitconcept/volto-carousel-block/components/View';
import { CarouselSchema } from '@kitconcept/volto-carousel-block/components/schema';
import sliderSVG from '@plone/volto/icons/slider.svg';

const messages = defineMessages({
  Carousel: {
    id: 'Carousel',
    defaultMessage: 'Carousel',
  },
});

const applyConfig = (config) => {
  const intl = useIntl();

  config.blocks.blocksConfig.carousel = {
    id: 'carousel',
    title: intl.formatMessage(messages.Carousel),
    group: 'common',
    icon: sliderSVG,
    view: CarouselView,
    edit: CarouselEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    blockSchema: CarouselSchema,
    // block settings
    allowLoop: true,
  };

  return config;
};

export default applyConfig;
