import React from 'react';
// import Header from '@/layouts/Header';
// import Footer from '@/layouts/Footer'
// import OffCanvas from '@/components/OffCanvas'
import Hero from '@/components/Hero'
import ServiceItems from '@/components/ServiceItems';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Testimonial from '@/components/Testimonial';
import Brand from '@/components/Brand';
import Blog from '@/components/Blog';
import Pricing from '@/components/Pricing';

const page = () => {
  return (
    <div>
      {/* <Header/>
      <Footer/> */}
      {/* <OffCanvas/> */}
      <Hero/>
      <ServiceItems/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Testimonial/>
      <Brand/>
      <Blog/>
      <Pricing/>
    </div>
  )
}

export default page