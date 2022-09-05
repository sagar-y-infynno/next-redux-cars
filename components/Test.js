import React from 'react';
import { FacebookShareButton ,WhatsappShareButton, InstapaperShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, InstapaperIcon } from 'react-share';

export default function Test() {

  return (
    <>
      <FacebookShareButton quote='this is autodigg' hashtag='#autodigg' url="http://localhost:3000/" >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton url="http://localhost:3000/" >
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <InstapaperShareButton description='this is autodigg a new and used car buying site' title=""  url="http://localhost:3000/" >
        <InstapaperIcon size={32} round={true} />
      </InstapaperShareButton>
    </>
  )
}
