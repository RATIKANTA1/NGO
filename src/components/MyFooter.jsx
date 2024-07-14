import React from 'react';
import { Footer } from "flowbite-react";
import { BsLinkedin, BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../assets/logo.png';



const MyFooter = () => {

  return (
    <Footer  className='px-4 lg:px-14 h-fit mx-auto py-8   '>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center md:px-8">
          <div className=''>
            <Footer.Brand
              href="/"
              src={logo}
              alt="Kshitiksha"
              name="Kshitiksha Foundation"
              className='w-20 h-20 text-wrap'
          
            />
            <div className='text-gray-700 mt-4 sm:mt-0'>
              <p className='mb-1'>© 2024 Kshitiksha Foundation Ltd</p>
              <p>All rights reserved</p>
            </div>
            <div className="mt-4 flex space-x-6">
              <Footer.Icon href="https://in.linkedin.com/company/kshitiksha-foundation" target='_blank' icon={BsLinkedin} />
              <Footer.Icon href="https://www.instagram.com/kshitikshafoundation/?hl=en" target='_blank' icon={BsInstagram} />
              <Footer.Icon href="https://www.youtube.com/channel/UCsYO4VFazA98ISScE4cfQqg" target='_blank' icon={BsYoutube} />
              <Footer.Icon href="https://www.facebook.com/p/Kshitiksha-Foundation-100079763515404/" target='_blank' icon={BsFacebook} />
              <Footer.Icon href="https://twitter.com/KshitikshaF" target='_blank' icon={BsTwitter} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter;
