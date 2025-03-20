import React, { useState } from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { BlocksForm } from '@plone/volto/components/manage/Form';
import { blocksFormGenerator } from '@plone/volto/helpers/Blocks/Blocks';
import { v4 as uuid } from 'uuid';
import DefaultEditBlockWrapper from '@plone/volto/components/manage/Blocks/Container/EditBlockWrapper';
import SimpleContainerToolbar from '@plone/volto/components/manage/Blocks/Container/SimpleContainerToolbar';
import config from '@plone/volto/registry';

import Sidebar from './Data';

const Edit = (props) => {
  const {
    block,
    data,
    onChangeBlock,
    onChangeField,
    pathname,
    selected,
    manage,
  } = props;

  const blockType = data['@type'];
  const metadata = props.metadata || props.properties;
  const isInitialized = data?.blocks && data?.blocks_layout;
  const properties = isInitialized ? data : blocksFormGenerator(0, '');
  const blockConfig = config.blocks.blocksConfig[blockType];
  const blocksConfig = blockConfig.blocksConfig || props.blocksConfig;

  // Custom components from config or default ones
  const ContainerToolbar =
    blockConfig.containerToolbar || SimpleContainerToolbar;
  const EditBlockWrapper =
    blockConfig.editBlockWrapper || DefaultEditBlockWrapper;

  let [selectedBlock, setSelectedBlock] = useState(
    properties.blocks_layout.items[0],
  );
  if (props.setSelectedBlock) {
    ({ selectedBlock, setSelectedBlock } = props);
  }

  const blockState = {};

  const onAddNewBlock = () => {
    const newuuid = uuid();
    const type = { '@type': 'teaser' };
    const blocks = data.blocks || properties.blocks;
    const blocks_layout = data.blocks_layout || properties.blocks_layout;
    onChangeBlock(block, {
      ...data,
      blocks: {
        ...blocks,
        [newuuid]: type,
      },
      blocks_layout: {
        items: [...blocks_layout.items, newuuid],
      },
    });
  };

  const containerProps = {
    ...props,
    blocksConfig,
    blockType,
    metadata,
    onAddNewBlock,
    selectedBlock,
    setSelectedBlock,
  };

  return (
    <>
      {data.headline && <h2 className="headline">{data.headline}</h2>}

      {selected && <ContainerToolbar {...containerProps} />}

      <BlocksForm
        metadata={metadata}
        properties={properties}
        manage={manage}
        selectedBlock={selected ? selectedBlock : null}
        blocksConfig={blocksConfig}
        title={data.placeholder}
        isContainer
        isMainForm={false}
        stopPropagation={selectedBlock}
        disableAddBlockOnEnterKey
        onSelectBlock={(id) => {
          setSelectedBlock(id);
        }}
        onChangeFormData={(newFormData) => {
          onChangeBlock(block, {
            ...data,
            ...newFormData,
          });
        }}
        onChangeField={(id, value) => {
          if (['blocks', 'blocks_layout'].includes(id)) {
            blockState[id] = value;
            onChangeBlock(block, {
              ...data,
              ...blockState,
            });
          } else {
            onChangeField(id, value);
          }
        }}
        pathname={pathname}
      >
        {({ draginfo }, editBlock, blockProps) => (
          <EditBlockWrapper draginfo={draginfo} blockProps={blockProps}>
            {editBlock}
          </EditBlockWrapper>
        )}
      </BlocksForm>
      <SidebarPortal selected={selected && !selectedBlock}>
        <Sidebar {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
