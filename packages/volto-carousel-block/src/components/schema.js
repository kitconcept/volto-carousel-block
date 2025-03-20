import { defineMessages } from 'react-intl';

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
});

export const Schema = (props) => {
  return {
    title: props.intl.formatMessage(messages.Carousel),
    block: 'carousel',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['headline', 'items_to_show', 'hide_description'],
      },
    ],
    properties: {
      headline: {
        title: props.intl.formatMessage(messages.headline),
      },
      items_to_show: {
        type: 'number',
        title: props.intl.formatMessage(messages.itemsToShow),
        defaultValue: 4,
      },
      hide_description: {
        title: props.intl.formatMessage(messages.hideDescription),
        type: 'boolean',
      },
    },
    required: [],
  };
};
