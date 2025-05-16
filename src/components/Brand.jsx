import React from 'react'
import Image from "next/image";
import Google from "@/assets/image/brand/google.png"


const Brand = () => {
  return (
    <div className="bg-white brandCarousel">
        <div className="container">
          <div className="swiper py-6 border-t border-b border-black-text-100">
            <div className="swiper-wrapper grid grid-cols-2 lg:grid-cols-6">
              <div className="swiper-slide">
                <Image
                  className="mx-auto block"
                  src={Google}
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="mx-auto block"
                  src={Google}
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="mx-auto block"
                  src={Google}
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="mx-auto block"
                  src={Google}
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="mx-auto block"
                  src={Google}
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="mx-auto block"
                  src={Google}
                  alt=" brandlogo"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default Brand