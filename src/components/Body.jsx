import React from 'react';
import { Message } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import imageBlockSVG from '@plone/volto/components/manage/Blocks/Image/block-image.svg';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getTeaserImageURL } from '../helpers';
import { MaybeWrap, UniversalLink } from '@plone/volto/components';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
});

defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
  moreInfo: {
    id: 'moreInfo',
    defaultMessage: 'More info',
  },
});

const CarouselBody = ({ data, dataBlock, isEditMode }) => {
  const intl = useIntl();
  const href = data.href?.[0];
  const imageType = href && href?.image_field && href.image_field;
  const image = data.preview_image?.[0];

  return (
    <>
      {!href && isEditMode && (
        <Message>
          <div className="grid-teaser-item default">
            <img src={imageBlockSVG} alt="" />
            <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
          </div>
        </Message>
      )}
      {href && (
        <div className="grid-teaser-item top">
          <MaybeWrap
            condition={!isEditMode}
            as={UniversalLink}
            href={href['@id']}
            target={data.openLinkInNewTab ? '_blank' : null}
            tabIndex={-1}
          >
            <>
              {(href.hasPreviewImage || //Although we do not get this attribute any longer from the schema, we still keep it to ensure old content with that attribute still works
                image ||
                imageType === 'image' ||
                imageType === 'preview_image') && (
                <div className="grid-image-wrapper">
                  <img
                    src={flattenToAppURL(
                      getTeaserImageURL(href, image, imageType),
                    )}
                    alt=""
                    loading="lazy"
                  />
                </div>
              )}
              <h3>{data?.title}</h3>
              {!dataBlock.hide_description && <p>{data?.description}</p>}
            </>
          </MaybeWrap>
        </div>
      )}
    </>
  );
};

export default CarouselBody;
