function Gallery(){
    return(
        <div className="gallery-layout flex flex-col justify-around items-center my-30   ">
            <h1 className="text-8xl text-center mb-10">Gallery</h1>
            <div className="grid grid-cols-3 gap-4 justify-center items-center max-md:grid-cols-2 max-sm:grid-cols-1">
                <img src="view1.jpg" alt=" view1" className="w-full h-48 object-cover rounded-2xl"/>
                <img src="view2.jpg" alt=" view2" className="w-full h-48 object-cover rounded-2xl"/>
                <img src="view3.jpg" alt=" view3" className="w-full h-48 object-cover rounded-2xl"/>
                <img src="view4.jpg" alt=" view4" className="w-full h-48 object-cover rounded-2xl"/>
                <img src="view5.jpg" alt=" view5" className="w-full h-48 object-cover rounded-2xl"/>
                <img src="view6.jpg" alt=" view6" className="w-full h-48 object-cover rounded-2xl"/>
            </div>
        </div>
    )
}
export default Gallery