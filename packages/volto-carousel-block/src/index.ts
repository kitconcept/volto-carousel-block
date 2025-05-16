import CarouselEdit from './components/Edit';
import CarouselView from './components/View';
import { CarouselSchema } from './components/schema';
import { CarouselBlockDataAdapter } from './components/adapter';
import sliderSVG from '@plone/volto/icons/slider.svg';
import type { ConfigType } from '@plone/registry';
import type { BlockConfigBase } from '@plone/types';

declare module '@plone/types' {
  export interface BlocksConfigData {
    carousel: BlockConfigBase;
  }
}

const applyConfig = (config: ConfigType) => {
  config.blocks.blocksConfig.carousel = {
    id: 'carousel',
    title: 'Carousel',
    group: 'common',
    icon: sliderSVG,
    view: CarouselView,
    edit: CarouselEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    blockSchema: CarouselSchema,
    dataAdapter: CarouselBlockDataAdapter,
    category: 'carousel',
  };

  return config;
};

export default applyConfig;
