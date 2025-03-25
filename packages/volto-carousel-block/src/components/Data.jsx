import React, { useEffect } from 'react';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import withObjectBrowser from '@plone/volto/components/manage/Sidebar/ObjectBrowser';
import { difference, usePrevious } from '@plone/volto/helpers';
import { replaceItemOfArray } from '@plone/volto/helpers/Utils/Utils';
import { useIntl } from 'react-intl';

const Data = (props) => {
  const {
    block,
    blocksConfig,
    blocksErrors,
    data,
    onChangeBlock,
    navRoot,
    contentType,
  } = props;
  const intl = useIntl();
  const { columns } = props.data;
  const previous = usePrevious(columns);

  useEffect(() => {
    if (previous) {
      const diff = difference(columns, previous);
      const index = diff.findIndex((val) => val);
      if (diff[index]?.href?.[0]) {
        onChangeBlock(block, {
          ...data,
          columns: replaceItemOfArray(data.columns, index, {
            ...data.columns[index],
            title: diff[index].href[0].title,
            head_title: diff[index].href[0].head_title,
            description: diff[index].href[0].Description,
          }),
        });
      }
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [columns]);

  const schema = blocksConfig[data['@type']].blockSchema({ data, intl });

  return (
    <>
      <BlockDataForm
        schema={schema}
        title={schema.title}
        onChangeField={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
        onChangeBlock={onChangeBlock}
        formData={data}
        block={block}
        blocksConfig={blocksConfig}
        navRoot={navRoot}
        contentType={contentType}
        errors={blocksErrors}
      />
    </>
  );
};

export default withObjectBrowser(Data);
