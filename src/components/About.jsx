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
                <h2 className='text-4xl text-center font-serif'>About us</h2>
                <br /><br />
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
                    <div data-aos="zoom-out-left" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                        <img className='md:w-4/5 md:h-4/5 transition-all' src={hero2} alt='skb' />
                    </div>
                    <div className='md:w-4/5 mx-auto' data-aos="zoom-out-right" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                        <p className=' lg:text-xl  text-gray-500 mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, itaque. Laborum autem, pariatur doloremque labore molestias nisi? Iure, laborum perferendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iusto, maxime tempora  unde
                            consequatur, tempore hic voluptas dolores deserunt excepturi, exercitationem  doloremque voluptatem officiis ipsum?</p>
                        {/* <button className='btn-primary'>Learn More</button> */}
                    </div>
                </div>
            </div>

            {/* companies stats */}
            <div className='px-4 lg:px-14   mx-auto my-16 bg-gray-100 flex lg:flex-row lg:gap-1 gap-8 flex-col items-center justify-around py-10 h-fit '>
                

                <MyCard heading={texts[0].heading} para={texts[0].para} imgLink="https://life.futuregenerali.in/Content/images/about/mission.jpg" />

                <MyCard heading={texts[1].heading} para={texts[1].para} imgLink="data:image/jpeg;base64,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" />
                

            </div>
        </div>
    )
}

export default About