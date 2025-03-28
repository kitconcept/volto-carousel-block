import Edit from '@kitconcept/volto-carousel-block/components/Edit';
import View from '@kitconcept/volto-carousel-block/components/View';
import { Schema } from '@kitconcept/volto-carousel-block/components/schema';
import sliderSVG from '@plone/volto/icons/slider.svg';

const applyConfig = (config) => {
  config.blocks.blocksConfig.carousel = {
    id: 'carousel',
    title: 'Carousel',
    group: 'common',
    icon: sliderSVG,
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    blockSchema: Schema,
    // block settings
    allowLoop: true,
  };

  return config;
};

export default applyConfig;
