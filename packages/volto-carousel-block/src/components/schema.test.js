import { describe, it, expect, beforeAll } from 'vitest';
import config from '@plone/volto/registry';
import { CarouselSchema } from './schema';

// The @blocks-schema endpoint calls blockSchema with the intl object only.
const intl = { formatMessage: ({ defaultMessage }) => defaultMessage };

describe('CarouselSchema', () => {
  beforeAll(() => {
    // The schema reads the block settings from the registry, where index.ts
    // registers the block.
    config.blocks = {
      blocksConfig: { carousel: { id: 'carousel', allowLoop: false } },
    };
  });

  it('resolves with only intl, as the endpoint calls it', () => {
    const schema = CarouselSchema({ intl });
    expect(schema.title).toBe('Carousel');
    expect(schema.block).toBe('carousel');
    expect(schema.properties.columns.widget).toBe('object_list');
    expect(schema.fieldsets[1].fields).toEqual([
      'headline',
      'items_to_show',
      'hide_description',
    ]);
  });

  it('adds the loop field when the block allows it', () => {
    config.blocks.blocksConfig.carousel.allowLoop = true;
    try {
      const schema = CarouselSchema({ intl });
      expect(schema.fieldsets[1].fields).toContain('loop');
    } finally {
      config.blocks.blocksConfig.carousel.allowLoop = false;
    }
  });
});
