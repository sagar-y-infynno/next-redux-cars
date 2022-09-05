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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
