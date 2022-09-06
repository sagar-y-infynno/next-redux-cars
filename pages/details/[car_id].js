import Image from 'next/image';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
// import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import { getCarDetails } from '../../reducers/carSlice';
import { Full_Screen_Thumb } from '../../components/Images';

// image gallary
import ImageGallery from 'react-image-gallery';


// import Car from '../../public/images/car.svg';

import { Car, Cal, Hash, Metter, Picker, Pump, Stamp, Stear, Engine } from '../../components/Images';

// import 
export default function CarDetails() {

  const router = useRouter();
  const car_id = router.query.car_id;
  const dispatch = useDispatch();
  const {car, isLoading} = useSelector(state => ({
    car: state.car.data,
    isLoading: state.car.isLoading
  }));
  const details_icons = [
    <Car key="" />,
    <Cal key="" />,
    <Hash key="" />,
    <Metter key="" />,
    <Picker key="" />,
    <Pump key="" />,
    <Car key="" />,
    <Stamp key="" />,
    <Stear key="" />,
    <Engine key="" />,
  ]
  const car_details = {
    car_type : "car type",
    year : "year",
    vin : "vin",
    milage : "milage",
    exterior_color : "exterior color",
    fuel_type : "fuel",
    trim : "trim",
    transmission : "transmission",
    drivetrain : "drivetrain",
    engine_description : "engine"
  };

  // console.log(car.data, "car data");
  // console.log(car, "car data");


  useEffect(() => {
    // console.log(car_id, " = vin");
    // console.log(car.photos.map(photo => ({
    //   original: photo,
    //   thumbnail: photo,
    //   })) , "car photo data");
    if(car_id) {
        dispatch(getCarDetails(car_id));
        console.log(car, "car data");
      }
    }, [car_id]);

    car.photos && console.log(car.photos, "car data");

  // return null;

  // console.log(cars.data.filter(car => car.car_id === car_id));
  return (
    <>
    <div className="container">
      <Head>
        <title> {car.model} | Car Details</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`${car.make} ${car.model} ${car.year} car details`} />

        <meta property="og:type" name="og:type" content="website" />
        <meta property="og:site_name" name="og:site_name" content="cars app" />
        <meta property="og:url" name="og:url" content="https://next-redux-cars.vercel.app/" />  
        <meta name="og:title" property="og:title" content={`${car.model} | Car Details`} />
        <meta name="og:description" property="og:description" content={`${car.make} ${car.model} ${car.year} car details`} />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="og:image" property="og:image" content={`${car.has_photos === "Y" ? car.photos[0] : "https://next-redux-cars.vercel.app/images/imageplaceholder.png" }`} />  
        <link rel="canonical" href="https://next-redux-cars.vercel.app/" />

        <link rel="icon" href="/favicon_io.ico" />
      </Head>

      <main >
        <Header />
        <div className="main-container details-page">
        <div className="page-header">
          <div className="header-details-block">
            <Link href="/" >
              <a>
              <div className="header-nav-back">
                <Image src="/images/back-arrow.svg" alt="back arrow" height={10.67} width={13.33} />
              </div>
              </a>
            </Link>
            <div className="header-details-box">
              {isLoading ? 
                <>
                  <div className="w-full max-w-[350px] h-[32px] mb-[6px] animate-pulse bg-gray-500"></div>
                  <div className="w-full max-w-[250px] h-[16px] mb-[6px] animate-pulse bg-gray-500"></div>
                  <div className="w-full max-w-[250px] h-[16px] mb-[6px] animate-pulse bg-gray-500"></div>
                </>
              :
                <>
                  <p className='page-title' >{car.year} {car.make} {car.model}</p>
                  <span className='page-subtitle' >{car.dealership} • {car.milage}  Milage • {car.exterior_color}</span>
                  <span className='page-subtitle' >{car.city}, {car.state}</span>
                </>
              } 
            </div>
          </div>
          <div className="header-actions-block">
            <div className="car-price-box">
              <p className="font-[600] text-[28px] leading-[38px] text-[#28293D]" >
                {car?.price && car.price.toLocaleString('en-US', {style:'currency', currency:'USD', maximumFractionDigits: 0})}
              </p>
              <Image src="/images/info.svg" height={16} width={16} alt='info' />
            </div>
            <button className='card-action-btn'>
              <span>Invite dealer</span>
              <Image src="/images/arrow.svg" alt="arrow" layout="fixed" width={15} height={24} />
            </button>
          </div>
        </div>
        </div>
        <div className="offer-block" >
          <div className="offer-block-container" >
            {/* <div className=""> */}
              <div className="flex items-center">
                <Image src="/images/green-star.svg" height="20px" width="15px" alt="Special Offers" />
                <p className="ml-[4px] text-[12px] font-[600] leading-[20px] text-[#05A660] uppercase">Special Offers</p>
              </div>
              <div className='flex items-center gap-[16px]'>
                {/* <p className="flex items-center gap-[6px]">
                  <span className="h-[4px] w-[4px] rounded-[2px] bg-black mr-[4px] block"></span>
                  <span>100% credit approval guaranteed</span>
                </p>
                <p className="flex items-center gap-[6px]">
                  <span className="h-[4px] w-[4px] rounded-[2px] bg-black mr-[4px] block"></span>
                  <span>Complimentary 101pt safety check</span>
                </p> */}
                {car.car_offers && JSON.parse(car.car_offers).map((offer, i) => (
                  <p className="flex items-center gap-[6px]" key={i} >
                    <span className="h-[4px] w-[4px] rounded-[2px] bg-black mr-[4px] block"></span>
                    <span>{offer}</span>
                  </p>
                ))}
              </div>
            {/* </div> */}
          </div>
        </div>
        <div className="car-slider-section">
          {car.photos && 
            <ImageGallery items={car.photos.map(photo => ({
              original: photo,
              thumbnail: photo,
            }))} 
            originalHeight={580}
            originalWidth={872}
            thumbnailHeight={140}
            thumbnailWidth={140}
            showPlayButton={false}
            renderFullscreenButton={() => <button className="image-gallery-icon image-gallery-fullscreen-button">
              <Full_Screen_Thumb />
            </button>}
            />
          }
        </div>
        <div className="car-details-section">
          <div className="car-details-container">
            <div className="car-details-container-title">
              <p>Car details</p>
            </div>          
            <div className="car-details-grid-box">
              {Object.keys(car_details).map((details, i) => (
                <div className="car-details-s-box" key={i}>
                  <div className="car-details-icon-box">
                    {details_icons[i]}
                  </div>
                  <div className="car-details-content">
                    <span className="car-details-sub"> {car_details[details]} </span>
                    <p className="car-details-value"> {car[details]} </p>
                  </div>
                </div>
              ))}
            </div>          
          </div>
          <div className="car-details-container">
            <div className="car-details-container-title">
              <p>Other features</p>
            </div>         
            <div className="car-feature-grid-box">
              {car.features1 && JSON.parse(car.features1).map((feature, i)=> <p className="car-d-feature-box" key={i}>
                {feature}
              </p>)}
            </div>
          </div>
        </div>
        <Footer />
      </main>

    </div>
    </>
  )
}
