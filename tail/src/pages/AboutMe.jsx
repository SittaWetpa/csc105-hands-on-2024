function AboutMe(){
    return(
        <div >
            <div className="grid grid-cols-2 justify-center items-center  mx-10 my-20 ">
                <div className="image-mansmile flex items-center justify-end w-2/3 max-xl:w-2/3 max-lg:w-3/3 max-sm:w-full ">
                    <img src="mansmile.png" alt="A man smiling at you :D"/>
                </div>
                <div className="aboutMe">
                    <h1 className="font-extrabold text-6xl">About me</h1>
                    <span className="font-bold text-xl">Artist & Designer</span>
                    <p className="my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a deserunt, 
                        ea,<br /> 
                        error quia natus eos distinctio minima. Explicabo iure, quis assumenda magnam, <br />
                        mollitia, fuga cum voluptates provident nesciunt dolores rerum? Enim reiciendis <br />
                        corporis praesentium assumenda iusto unde ducimus quod, explicabo, perspiciatis <br />
                        qui ut voluptate optio!
                    </p>
                    <button className="bg-green-800 text-white p-2 px-10 rounded-full shadow-md">
                        Read More
                        </button>
                </div>
            </div>
        </div>
    )
}
export default AboutMe