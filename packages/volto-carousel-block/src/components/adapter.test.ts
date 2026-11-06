import { describe, it, expect, vi } from 'vitest';
import { CarouselBlockDataAdapter } from './adapter';

describe('CarouselBlockDataAdapter', () => {
  it('calls onChangeBlock with the changed field merged into the data', () => {
    const onChangeBlock = vi.fn();
    const data = {
      '@type': 'carousel',
      headline: 'Old headline',
      items_to_show: 4,
      hide_description: false,
    };

    CarouselBlockDataAdapter({
      block: 'block-1',
      data,
      id: 'headline',
      onChangeBlock,
      value: 'New headline',
    });

    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      ...data,
      headline: 'New headline',
    });
  });
});
