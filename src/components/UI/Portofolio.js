import React, { useEffect, useState } from 'react';
import data from '../../assets/data/portfolioData';
import Modal from './Modal';

function Portofolio() {
    const [nextItems, setNextItems] = useState(6);
    const [portofolios, setPortofolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveID(id)
    };

    useEffect(() => {

        if (selectTab === 'all') {
            setPortofolios(data)
        }

        if (selectTab === 'web-design') {
            const filterData = data.filter(item => item.category === 'Web Design')
            setPortofolios(filterData)
        }

        if (selectTab === 'ux-design') {
            const filterData = data.filter(item => item.category === 'Ux')
            setPortofolios(filterData)
        }

    }, [selectTab]);

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    }

    return (
        <section id='portofolio'>
            <div className='container'>


                <div className='flex items-center justify-between flex-wrap '>
                    <div className='mb-7 sm:mb-0'>
                        <h3 className='text-headingColor text-[2rem]'>My recent project</h3>
                    </div>


                    <div className='flex gap-3 '>
                        <button onClick={() => setSelectTab('all')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                        rounded-[8px]'>
                            All
                        </button>

                        <button onClick={() => setSelectTab('web-design')}  className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                        rounded-[8px]'>
                            Web Design
                        </button>

                        <button onClick={() => setSelectTab('ux-design')}  className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4
                        rounded-[8px]'>
                            Ux Design
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-4 flex-wrap mt-12'>
                    {
                        portofolios?.slice(0, nextItems).map((portofolio, index) => (
                            <div key={index} data-aos="fade-zoom-in" data-aos-duration="1000" delay="50" className='group max-w-full sm:w-[48.5%] md:w-[31.2%] lg:w-[32.2%] relative <-[1]'>
                                <figure>
                                    <img className='rounded-[8px]' src={portofolio.imgUrl} alt="wev developed" />
                                </figure>

                                <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 <-[5]
                                hidden group-hover:block'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <button onClick={() => showModalHandler(portofolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 
                                        rounded-[8px] font-[500] ease-in duration-200'>See Detail</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


                <div className='text-center mt-6'>
                    {
                        nextItems < portofolios.length && data.length > 6 && (
                            <button onClick={loadMoreHandler} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 
                                    rounded-[8px] font-[500] ease-in duration-200'>
                                Load More
                            </button>
                        )
                    }
                </div>
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
            }
        </section>
    );
}

export default Portofolio;