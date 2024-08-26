import React from 'react';
import blog1 from '../assets/blog1.jfif';
import blog2 from '../assets/blog2.jfif';
import blog3 from '../assets/blog4.jfif';

const Blog = () => {
    const blogs = [
        { id: 1, title: "Passionate about making a difference in the society?💫", image: blog1, link: "https://www.linkedin.com/posts/kshitiksha-foundation_kshitikshafoundation-volunteer-activity-7164542821276876800-zoxV?utm_source=share&utm_medium=member_desktop" },
        { id: 2, title: "Small acts of kindness, big impacts.❤️‍🩹", image: blog2, link: "https://www.linkedin.com/posts/kshitiksha-foundation_kshitikshafoundation-volunteereork-volunteer-activity-7204705155877855233-aevE?utm_source=share&utm_medium=member_desktop" },
        { id: 3, title: "Through books, we sharpen brains, change lives, and spread smiles to these little angels.💓🎓", image: blog3, link: "https://www.linkedin.com/posts/kshitiksha-foundation_volunteer-kshitikshafoundation-kindness-activity-7095395869545443328-297u?utm_source=share&utm_medium=member_desktop" },
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 bg-gray-100 py-6' id='Blog'>
            <div data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"
                className='text-center md:w-3/4 mx-auto flex flex-col items-center' >
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Our latest Blog</h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>Stay updated with our recent posts, insights, and stories. Dive into a world of knowledge and inspiration as we explore topics that matter to you.</p>
            </div>
            {/* blogs */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"
                        className='mx-auto relative mb-12 cursor-pointer ' >
                        <img src={blog.image} alt='' className='hover:scale-95 transition-all duration-300 p-8' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-gray-500 font-semi-bold'>{blog.title}</h3>
                            <div className='flex items-center justify-center gap-8'>
                                <a href={blog.link} target="_blank" className='font-bold text-green-500 hover:text-neutral-700'>
                                    Readmore</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Blog