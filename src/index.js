import Edit from './components/Edit';
import View from './components/View';
import sliderSVG from '@plone/volto/icons/slider.svg';
import './theme/main.less';

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
    security: {
      addPermission: [],
      view: [],
    },
  };
  return config;
};

export default applyConfig;
