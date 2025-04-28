import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  Source: {
    id: 'Source',
    defaultMessage: 'Source',
  },
  Carousel: {
    id: 'Carousel',
    defaultMessage: 'Carousel',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description',
  },
  imageOverride: {
    id: 'Image override',
    defaultMessage: 'Image override',
  },
  item: {
    id: 'Item',
    defaultMessage: 'Item',
  },
  items: {
    id: 'Items',
    defaultMessage: 'Items',
  },
  addItem: {
    id: 'Add item',
    defaultMessage: 'Add item',
  },
  headline: {
    id: 'Headline',
    defaultMessage: 'Headline',
  },
  itemsToShow: {
    id: 'Items to show',
    defaultMessage: 'Items to show',
  },
  hideDescription: {
    id: 'Hide description',
    defaultMessage: 'Hide description',
  },
  settings: {
    id: 'Settings',
    defaultMessage: 'Settings',
  },
  Target: {
    id: 'Target',
    defaultMessage: 'Target',
  },
  openLinkInNewTab: {
    id: 'Open in a new tab',
    defaultMessage: 'Open in a new tab',
  },
  head_title: {
    id: 'head_title',
    defaultMessage: 'Head title',
  },
  loop: {
    id: 'Loop',
    defaultMessage: 'Loop',
  },
});

const itemSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.item),
    addMessage: intl.formatMessage(messages.addItem),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['href', 'title', 'head_title', 'description', 'preview_image'],
      },
    ],

    properties: {
      href: {
        title: intl.formatMessage(messages.Target),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: [
          'Title',
          'head_title',
          'Description',
          'hasPreviewImage',
          'image_field',
          'image_scales',
          '@type',
        ],
        allowExternals: true,
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
      head_title: {
        title: intl.formatMessage(messages.head_title),
      },
      description: {
        title: intl.formatMessage(messages.description),
        widget: 'textarea',
      },
      preview_image: {
        title: intl.formatMessage(messages.imageOverride),
        widget: 'object_browser',
        mode: 'image',
        allowExternals: true,
        selectedItemAttrs: ['image_field', 'image_scales'],
      },
      openLinkInNewTab: {
        title: intl.formatMessage(messages.openLinkInNewTab),
        type: 'boolean',
      },
    },
    required: ['href'],
  };
};

export const CarouselSchema = ({ intl }) => {
  const allowLoop = config.blocks.blocksConfig.carousel.allowLoop;
  return {
    title: intl.formatMessage(messages.Carousel),
    block: 'carousel',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['columns'],
      },
      {
        id: 'settings',
        title: intl.formatMessage(messages.settings),
        fields: !allowLoop
          ? ['headline', 'items_to_show', 'hide_description']
          : ['headline', 'items_to_show', 'hide_description', 'loop'],
      },
    ],
    properties: {
      columns: {
        widget: 'object_list',
        title: intl.formatMessage(messages.items),
        schema: itemSchema({ intl }),
      },
      headline: {
        title: intl.formatMessage(messages.headline),
      },
      items_to_show: {
        type: 'number',
        title: intl.formatMessage(messages.itemsToShow),
        maximum: 4,
        minimum: 1,
      },
      hide_description: {
        title: intl.formatMessage(messages.hideDescription),
        type: 'boolean',
      },
      loop: {
        title: intl.formatMessage(messages.loop),
        type: 'boolean',
      },
    },
    required: [],
  };
};
