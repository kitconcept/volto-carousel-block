import React from 'react';
import { v4 as uuid } from 'uuid';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';

import Sidebar from './Data';
import CarouselView from './View';

const CarouselEdit = (props) => {
  const { onChangeBlock, block, selected } = props;
  // create default data so `data.columns` is never undefined.
  const data = {
    columns: [1, 2, 3, 4].map(() => ({ '@id': uuid(), '@type': 'teaser' })),
    items_to_show: 4,
    ...props.data,
  };

  // In place migration for existing blocks.
  // Fixes the columns in case they do not have a @type set to teaser.
  // TODO: Remove in the future when all existing blocks have been migrated.
  React.useEffect(() => {
    if (data.columns.some((col) => !col['@type'])) {
      const fixedData = {
        ...data,
        columns: data.columns.map((col) => ({
          ...col,
          '@type': col['@type'] || 'teaser',
        })),
      };
      onChangeBlock(block, fixedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default withBlockExtensions(CarouselEdit);
