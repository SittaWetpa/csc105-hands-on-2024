function Home(){
    return (
        <div>
            <div className="grid grid-cols-2 items-center mx-10 my-20">
                <div className="mt-20 flex items-center  justify-end">
                    <div className="homeDetail ">
                        <span className="text-2xl">Hello, It's me</span>
                        <h1 className="text-6xl font-extrabold my-2">Artist John</h1>
                        <span className="text-xl">I'm an Artist</span>
                        <p >Please hold your breath as we dive into
                            a world full of<br/> creativity with designer John.
                        </p>
                        <div className="social-icon w-1/2 flex flex-row justify-between my-10 ">
                            <img src="facebook.png" alt="facebook logo" className="w-12 rounded-full" />
                            <img src="ig.png" alt="ig logo" className="w-12 rounded-full"/>
                            <img src="x.png" alt="x logo" className="w-12 rounded-full"/>
                        </div>
                        <button className="bg-green-800 text-white p-2 px-10 rounded-full shadow-md">My Portfolio</button>
                    </div>
                </div>
                <div className="image w-2/3 max-xl:w-2/3 max-lg:w-3/3 max-sm:w-5/3">
                    <img src="manO.png" alt="This is John picture" />
                </div>
            </div>
        </div>
    )
}
export default Home