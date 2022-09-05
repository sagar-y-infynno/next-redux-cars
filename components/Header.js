import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookShareButton ,WhatsappShareButton, InstapaperShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, InstapaperIcon } from 'react-share';


export default function Header() {
  return (
    <div className="app-header main-container">
      <div className='links-block'>
        <Link href="/" ><a  className="header-link">HOW IT WORKS</a></Link>
        <Link href="/" ><a className="header-link">WHY US</a></Link>
        <Link href="/" ><a className="header-link">CONTACT US</a></Link>
        <FacebookShareButton quote='this is autodigg' hashtag='#autodigg' url="https://next-redux-cars.vercel.app/" >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url="https://next-redux-cars.vercel.app/" >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <InstapaperShareButton description='this is autodigg a new and used car buying site' title=""  url="http://localhost:3000/" >
          <InstapaperIcon size={32} round={true} />
        </InstapaperShareButton>
      </div>
      <Link href="/" >
        <a>
          <div className='logo-block'>
            <Image src="/images/autodigg.svg" alt="logo" height="36px" width="132px" />
          </div>
        </a>
      </Link>
      <div className='actions-block'>
        <Link href="/" >
          <a className="header-action-link">
            <Image src="/images/car.svg" alt="car" height="20px" width="18px" />
            <span>USED CARS FOR SALE</span>
          </a>
        </Link>
        <button className="header-btn header-action-btn"><span>SIGN IN/REGISTER</span></button>
      </div>
      
    </div>
  )
}
