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
  kicker: {
    id: 'kicker',
    defaultMessage: 'Kicker',
  },
  loop: {
    id: 'Loop',
    defaultMessage: 'Loop',
  },
  overwrite: {
    id: 'Customize teaser content',
    defaultMessage: 'Customize teaser content',
  },
  overwriteDescription: {
    id: 'Check this box to customize the title, description, or image of the target content item for this teaser. Leave it unchecked to show updates to the target content item if it is edited later.',
    defaultMessage:
      'Check this box to customize the title, description, or image of the target content item for this teaser. Leave it unchecked to show updates to the target content item if it is edited later.',
  },
});

const itemSchema = ({ intl, value: data, activeObject }) => {
  return {
    title: intl.formatMessage(messages.item),
    addMessage: intl.formatMessage(messages.addItem),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'href',
          'overwrite',
          ...(data?.[activeObject]?.overwrite
            ? ['title', 'head_title', 'description', 'preview_image']
            : []),
        ],
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
      overwrite: {
        title: intl.formatMessage(messages.overwrite),
        description: intl.formatMessage(messages.overwriteDescription),
        type: 'boolean',
        default: false,
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
      head_title: {
        title: intl.formatMessage(messages.kicker),
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
        // We are passing the function, because we need the widget to take care of it
        // to pass down the current `activeObject` to the `itemSchema` function.
        schema: itemSchema,
      },
      headline: {
        title: intl.formatMessage(messages.headline),
      },
      items_to_show: {
        widget: 'select',
        type: 'number',
        title: intl.formatMessage(messages.itemsToShow),
        choices: [
          [2, '2'],
          [4, '4'],
        ],
        default: 4,
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
