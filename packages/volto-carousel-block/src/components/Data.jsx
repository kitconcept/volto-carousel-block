import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import React from 'react';
import { useIntl } from 'react-intl';

import { Schema } from './schema';

const BannerBlockData = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();
  const schema = Schema({ formData: data, intl });

  return (
    <>
      <BlockDataForm
        schema={schema}
        onChangeField={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
        onChangeBlock={onChangeBlock}
        formData={data}
        block={block}
      />
    </>
  );
};

export default BannerBlockData;
