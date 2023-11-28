import my from '../../assets/images/my-2.jpeg'
import CountUp from "react-countup"

function Hero() {
    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    <div className='w-full md:basis-1/2'>
                        <h5 
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            className='text-headingColor font-[500] text-[16px]'>
                            Hello Welcome
                        </h5>
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px]
                            leading-[35px] sm:leading-[46px] mt-5'
                            >I'm Anatolii Boboc <br/>
                            Software Developer
                        </h1>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            className='flex items-center gap-6 mt-6 mb-6'
                        >
                            <a href="#contact">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
                                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                    <i class="ri-mail-line"></i> Hire me
                                </button>
                            </a>
                            <a href="#portofolio"
                                className='text-smallTextColor font-[600] text-[16] border-b border-solid border-smallTextColor'
                            >See portofolio
                            </a>
                        </div>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className='flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-10 sm:pr-10 '
                        >
                            <span>
                                <i class="ri-apps-2-line"></i>
                            </span>
                            As a web developer who loves working with React, JavaScript, TypeScript and Redux Toolkit, I take pride in creating user-friendly websites and staying at the forefront of the latest web development trends. My passion for coding drives me to continuously learn and improve, ensuring that I deliver top-notch solutions for every project. I'm enthusiastic about collaborating with like-minded professionals to bring innovative web experiences to life.
                        </p>

                        <div className='flex items-center gap-5 mt-7'>
                            <span className='text-smallTextColor text-[15px] font-[500]'>
                                Follow me:
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/in/anatolii-boboc-46a888289/" target='_blank' className='text-smallTextColor text-[18px] font-[600]'>
                                    <i class="ri-linkedin-box-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/Anatolyie" target='_blank' className='text-smallTextColor text-[18px] font-[600]'>
                                    <i className='ri-github-fill'></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img className='rounded-full' src={my} alt="My img" />
                        </figure>
                    </div>
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                    md:flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='text-headinfColor font-[700] text-[32px]'>
                                <CountUp start={0} end={3} duration={2} suffix='+'/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Years of Experience</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headinfColor font-[700] text-[32px]'>
                                <CountUp start={0} end={100} duration={2} suffix='%'/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Succes rate</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headinfColor font-[700] text-[32px]'>
                                <CountUp start={0} end={20} duration={2} suffix='+'/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Happy clients</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headinfColor font-[700] text-[32px]'>
                                <CountUp start={0} end={30} duration={2} suffix='+'/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>Project completed</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;