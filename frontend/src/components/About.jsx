import React from 'react'
import about from "../assets/about.jpg"
import MyCard from './Card'
import image1 from "/src/assets/mission.jpg"
import image2 from "/src/assets/Vision3.jpg"
const About = () => {
    const texts = [{
        heading: "Mission",
        para: "Our mission is to empower communities through sustainable development and education. We aim to bridge the gap between potential and opportunity by providing resources, support, and opportunities for growth. We believe that education is a powerful tool for transformation and strive to create environments where individuals can learn, grow, and thrive"
    },
    {
        heading: "Vision",
        para: "We envision a world where every individual has access to quality education and the resources necessary for a sustainable livelihood. Our goal is to build self-reliant communities equipped to overcome challenges and seize opportunities, contributing to a future where poverty and inequality are significantly reduced."
    }]
    return (
        <div>

            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <h2 className='text-center text-4xl text-gray-500 font-semibold'>About us</h2>
                <br /><br />
                <div className='md:w-11/12 mx-auto flex flex-col xl:flex-row justify-between items-center gap-12 '>
                    <div className='flex justify-center' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                        <img className='md:w-4/5 md:h-3/4 transition-all animate-bounceSlow' src={about} alt='skb' />
                    </div>
                    <div className='md:w-4/5 mx-auto' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                        <p className=' lg:text-xl  text-gray-500 mb-8 text-justify'>Overview: Kshitiksha Foundation is a Section 8 NPO committed to fostering sustainable development and providing educational opportunities to underprivileged communities.<br />

                            Established on 15-Jul-2021, Kshitiksha Foundation is a Section 8 Company with over three years of impactful service.<br />

                            History and Incorporation: Kshitiksha Foundation was incorporated on July 15, 2021. Our registered office is located at Plot No. 19/20, IIMT Ladder Business Foundation, Knowledge Park III, Greater Noida, Noida, Uttar Pradesh. Since our inception, we have been actively engaged in social work activities without accommodation, primarily focusing on initiatives that create lasting positive change.</p>
                        {/* <button className='btn-primary'>Learn More</button> */}
                    </div>
                </div>
            </div>

            {/* companies stats */}
            <div className='px-4 lg:px-14  mx-auto bg-gray-100 flex lg:flex-row flex-col gap-6 items-center justify-around py-10 h-fit '>

                <MyCard heading={texts[0].heading} para={texts[0].para} imgLink={image1} />
                <MyCard heading={texts[1].heading} para={texts[1].para} imgLink={image2} />

            </div>
        </div>
    )
}

export default About