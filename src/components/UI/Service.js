import React from 'react';
import frontendImg from '../../assets/images/front-end.png'
import backendendImg from '../../assets/images/backend.png'
import appsImg from '../../assets/images/apps.png'
import uiImg from '../../assets/images/design.png'

function Service(props) {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingColor font-[700] text-[2.4rem] mb-5'>What do I help</h2>
                    <p className='lg:max-w-[600] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi obcaecati deleniti repellat voluptatem non possimus sapiente perspiciatis, quisquam accusantium sit ipsa dolore nemo dicta architecto nisi. Nemo, consectetur alias?
                    </p>
                </div>

                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>

                            <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform 
                            -translate-x-1/2'></div>
                            
                            {/* {card left} */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div 
                                                data-aos="fade-right"
                                                data-aos-delay="100"
                                                data-aos-duration="1200"
                                                className='bg-white p-4 rounded shadow group
                                                hover:bg-primaryColor cursor-pointer ease-in duration-150'
                                                >
                                                    <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                    group-hover:font-[600] text-xl'>Frontend Developer</h3>

                                                    <p className='text-[15px] leading-7 font-[400] text-smallTextColor group-hover:text-white
                                                    group-hover:font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto dolore ullam inventore odit architecto consequun?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 -h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center
                                    '>
                                        <figure>
                                            <img src={frontendImg} alt="frontend" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* {card right} */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div 
                                                data-aos="fade-left"
                                                data-aos-delay="100"
                                                data-aos-duration="1200"
                                                className='bg-white p-4 rounded shadow group
                                                hover:bg-primaryColor cursor-pointer ease-in duration-150'
                                                >
                                                    <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                    group-hover:font-[600] text-xl'>Backend Developer</h3>

                                                    <p className='text-[15px] leading-7 font-[400] text-smallTextColor group-hover:text-white
                                                    group-hover:font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto dolore ullam inventore odit architecto consequun?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 -h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center
                                    '>
                                        <figure> 
                                            <img src={backendendImg} alt="frontend" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                              {/* {card left} */}
                              <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div 
                                                data-aos="fade-right"
                                                data-aos-delay="100"
                                                data-aos-duration="1200"
                                                className='bg-white p-4 rounded shadow group
                                                hover:bg-primaryColor cursor-pointer ease-in duration-150'
                                                >
                                                    <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                    group-hover:font-[600] text-xl'>Frontend Developer</h3>

                                                    <p className='text-[15px] leading-7 font-[400] text-smallTextColor group-hover:text-white
                                                    group-hover:font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto dolore ullam inventore odit architecto consequun?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 -h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center
                                    '>
                                        <figure>
                                            <img src={appsImg} alt="frontend" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* {card right} */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>

                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div 
                                                data-aos="fade-left"
                                                data-aos-delay="100"
                                                data-aos-duration="1200"
                                                className='bg-white p-4 rounded shadow group
                                                hover:bg-primaryColor cursor-pointer ease-in duration-150'
                                                >
                                                    <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white
                                                    group-hover:font-[600] text-xl'>Backend Developer</h3>

                                                    <p className='text-[15px] leading-7 font-[400] text-smallTextColor group-hover:text-white
                                                    group-hover:font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto dolore ullam inventore odit architecto consequun?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-full bg-primaryColor border-white border-4 w-10 -h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center
                                    '>
                                        <figure>
                                            <img src={uiImg} alt="frontend" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Service;