import portofolios from "../../assets/data/portfolioData";

function Modal({ activeID, setShowModal }) {
    const portofolio = portofolios.find(portofolio => portofolio.id === activeID)

    return (
        <div className="fixed w-full h-full top-0 left-0 z-10 bg-headingColor bg-opacity-40">
            <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform
            -translate-x-1/2 -translate-y-1/2 p-5 overflow-auto h-75vh">
                <div>
                    <figure>
                        <img className="rounded-[8px]" src={portofolio.imgUrl} alt="portofolio background img" />
                    </figure>
                </div>

                <div>
                    <h2 className="text-2xl text-headingColor font-[700] my-5">
                        {portofolio.title}
                    </h2>

                    <p className='text-[15px] leading-7 text-smallTextColor'>
                        {portofolio.description}
                    </p>

                    <div className="mt-5 flex items-center gap-3 flex-wrap">
                        <h4 className="text-headingColor text-[18px] text-[700]">
                            Technologies:
                        </h4>
                        {
                            portofolio.technologies.map((item, index) => (
                                <span key={index} className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]
                                leading-0">{item}</span>
                            ))
                        }
                    </div>
                        <a href={portofolio.siteUrl}>
                            <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px]
                            font-[500] hover:bg-headingColor ease-in duration-300">Live Site</button>
                        </a>
                </div>

                <button onClick={() => setShowModal(false)} className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px]
                flex items-center justify-center rounded-[3px] loading-0 cursor-pointer">
                    &times;
                </button>



            </div>
        </div>
    );
}

export default Modal; 