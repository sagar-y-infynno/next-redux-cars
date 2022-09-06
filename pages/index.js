import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { getData } from './api/data';
import Test from '../components/Test';

export default function Home({cars}) {
  return (
    <div className="container">
      <Head>
        <title>Next Redux Cars App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <meta property="og:title" content="My cars project" key="title" /> */}
        <meta name="description" content="training next redux project..." />

        {/*  */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="cars app" />
        <meta property="og:url" content="https://next-redux-cars.vercel.app/" />  
        <meta name="og:title" property="og:title" content="My cars project" />
        <meta name="og:description" property="og:description" content="training project..." />

        {/* <meta name="twitter:card" content="summary" /> 
        <meta name="twitter:title" content="cars app" />
        <meta name="twitter:description" content="training project..." />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="sagar yadav" /> */}
        {/* <meta name="twitter:image" content="https://next-redux-cars.vercel.app/images/Create-Next-App.png" />    */}
        
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:image" content="https://next-redux-cars.vercel.app/images/Create-Next-App.png" />  
        <link rel="canonical" href="https://next-redux-cars.vercel.app/" />
        {/* <link rel="stylesheet" href="" /> */}
        {/*  */}

        <link rel="icon" href="/favicon_io.ico" />
      </Head>
      <main>
        <Header />
        <Main i_cars={cars} />
        {/*   <Test /> */}
        <Footer />
      </main>
    </div>
        // <Test />
  )
}

export async function getServerSideProps() {
  const jsonData = await getData();
  return {
    props: {
      cars : {
        data : jsonData.data,
        count: jsonData.count,
        page: 1,
        filter: jsonData.filter,
        selected_filter: {
          usedCar: true,
          car_type : "Used Car",
          year: "2011,2021",
          radius: "100",
          zip: "",
          price_from: 0,
          price_to: 100000,
          mileage: '',
          model: [],
          make: [],
          body_type : [], 
          exterior_color : [],
          interior_color : [],
          transmission : [],
          drivetrain : [],
          fuel_type : [],
          features: {
            'Interior Features': [],
            'Technology Features': [],
            'Safety Features': [],
            'Exterior Features': [],
            Others : []
          }
        }
      }
    }
  }
}
