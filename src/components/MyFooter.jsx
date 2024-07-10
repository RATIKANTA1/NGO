import React from 'react'
import { Footer } from "flowbite-react";
import { BsLinkedin, BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../assets/logo.png'
const MyFooter = () => {
  return (
    <Footer className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 md:px-8 pl-4">
          <div className='space-y-4 mb-8'>
            <Footer.Brand
              href="https://flowbite.com"
              src={logo}
              alt="Flowbite Logo"
              name="Kshitiksha Foundation"
               className='w-15 h-15'
            />
            <div className='text-gray-700'>
              <p className='mb-1'>Copyright @ 2024 Kshitiksha Foundation ltd</p>
              <p>All rights reserved</p>
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://in.linkedin.com/company/kshitiksha-foundation" target='blank' icon={BsLinkedin}/>
            <Footer.Icon href="https://www.instagram.com/kshitikshafoundation/?hl=en" target='blank' icon={BsInstagram} />
            <Footer.Icon href="https://www.youtube.com/channel/UCsYO4VFazA98ISScE4cfQqg" target='blank' icon={BsYoutube} />
            <Footer.Icon href="https://www.facebook.com/p/Kshitiksha-Foundation-100079763515404/" target='blank' icon={BsFacebook} />
            <Footer.Icon href="https://twitter.com/KshitikshaF" target='blank' icon={BsTwitter} />
          </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
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

export default MyFooter