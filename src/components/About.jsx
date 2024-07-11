import React from 'react'
import hero2 from "../assets/hero2.png"
import MyCard from './Card'

const About = () => {
    const texts = [{heading:"Mission", 
                    para:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim mollitia illo veniam laboriosam dolor qui officiis eum natus non sed tenetur beatae maiores ex quas fugiat, perspiciatis placeat, molestiae veritatis!"
    },
    {heading:"Vision", 
                    para:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim mollitia illo veniam laboriosam dolor qui officiis eum natus non sed tenetur beatae maiores ex quas fugiat, perspiciatis placeat, molestiae veritatis!"
    }]
  return (
    <div>

        {/* about text */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'  id='about'>
            <h2 className='text-4xl text-center font-serif'>About us</h2>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
                <div data-aos="zoom-out-left" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                    <img  className='md:w-4/5 md:h-4/5 transition-all' src={hero2} alt='skb' />
                </div>
                <div className='md:w-3/5 mx-auto' data-aos="zoom-out-right" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                    <p className='md:w-3/4 text-xl text-gray-500 mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, itaque. Laborum autem, pariatur doloremque labore molestias nisi? Iure, laborum perferendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iusto, maxime tempora  unde 
                    consequatur, tempore hic voluptas dolores deserunt excepturi, exercitationem  doloremque voluptatem officiis ipsum?</p>
                    {/* <button className='btn-primary'>Learn More</button> */}
                </div>
            </div>
        </div>

        {/* companies stats */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-16 bg-gray-100 flex justify-around  py-10 md:h-[70vh] sm:flex-wrap'>

               <MyCard heading={texts[0].heading} para={texts[0].para}/>
             
               <MyCard heading={texts[1].heading} para={texts[1].para}/>
                   
        </div>
    </div>
  )
}

export default About