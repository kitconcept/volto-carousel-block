import React from 'react';
import { SidebarPortal } from '@plone/volto/components';

import Sidebar from './Data';
import View from './View';

const Edit = (props) => {
  const { selected } = props;

  return (
    <>
      <View {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <Sidebar {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
