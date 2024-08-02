import React from 'react'
import hero2 from "../assets/hero2.png"
import MyCard from './Card'

const About = () => {
    const texts = [{
        heading: "Mission",
        para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim mollitia illo veniam laboriosam dolor qui officiis eum natus non sed tenetur beatae maiores ex quas fugiat, perspiciatis placeat, molestiae veritatis!"
    },
    {
        heading: "Vision",
        para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim mollitia illo veniam laboriosam dolor qui officiis eum natus non sed tenetur beatae maiores ex quas fugiat, perspiciatis placeat, molestiae veritatis!"
    }]
    return (
        <div>

            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <h2 className='text-center text-4xl text-gray-500 font-semibold'>About us</h2>
                <br /><br />
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
                    <div data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                        <img className='md:w-4/5 md:h-4/5 transition-all animate-bounceSlow' src={hero2} alt='skb' />
                    </div>
                    <div className='md:w-4/5 mx-auto' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                        <p className=' lg:text-xl  text-gray-500 mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, itaque. Laborum autem, pariatur doloremque labore molestias nisi? Iure, laborum perferendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iusto, maxime tempora  unde
                            consequatur, tempore hic voluptas dolores deserunt excepturi, exercitationem  doloremque voluptatem officiis ipsum?</p>
                        {/* <button className='btn-primary'>Learn More</button> */}
                    </div>
                </div>
            </div>

            {/* companies stats */}
            <div className='px-4 lg:px-14   mx-auto my-16 bg-gray-100 flex lg:flex-row lg:gap-1 gap-8 flex-col items-center justify-around py-10 h-fit '>
                
                <MyCard heading={texts[0].heading} para={texts[0].para} imgLink="https://life.futuregenerali.in/Content/images/about/mission.jpg" />
                <MyCard heading={texts[1].heading} para={texts[1].para} imgLink="https://sitasurat.in/assets/images/about/ourvision.jpg" />
                
            </div>
        </div>
    )
}

export default About