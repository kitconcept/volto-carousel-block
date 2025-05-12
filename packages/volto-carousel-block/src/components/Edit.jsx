import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { v4 as uuid } from 'uuid';

import Sidebar from './Data';
import CarouselView from './View';

const CarouselEdit = (props) => {
  const { onChangeBlock, block, selected } = props;
  // create default data so `data.columns` is never undefined.
  const data = {
    columns: [1, 2, 3, 4].map(() => ({ '@id': uuid() })),
    items_to_show: 4,
    ...props.data,
  };
  if (!props.data.columns) {
    onChangeBlock(block, data);
  }

  return (
    <>
      <CarouselView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <Sidebar
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default CarouselEdit;
