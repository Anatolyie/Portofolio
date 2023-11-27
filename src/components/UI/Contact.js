import React from 'react';

function Contact(props) {
    return (
        <section id='contact' className='pb-16'>
            <div className='container'>

                <div className='w-full md:w-1/3 mt-8 md:mt-0 mx-auto lg:flex items-center bg-indigo-100
                    px-4 lg:px-8 py-8'>
                    <form className='w-full'>
                        <div className='mb-5'>
                            <input 
                                type="text"
                                placeholder='Enter your name' 
                                className='w-full p-3 focus:outline-none rounded-[5px] mb-5'
                            />
                            <input 
                                type="email"
                                placeholder='Enter your mail' 
                                className='w-full p-3 focus:outline-none rounded-[5px] mb-5'
                            />
                            <input 
                                type="text"
                                placeholder='Subject' 
                                className='w-full p-3 focus:outline-none rounded-[5px] mb-9'
                            />
                            <textarea
                                type="text"
                                placeholder='Write your mesage' 
                                row={3}
                                className='w-full p-3 focus:outline-none rounded-[5px]'
                            />
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
                        hover:bg-headingColor text-center ease-linear duration-150'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;