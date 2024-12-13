function LatestArrivals(){

    return (
        <section id="latest_arrivals">
            <h2>Latest Arrivals</h2>
            <div className="arrivals_img_container">
                <div className="arrivals_img">
                    <img
                        src={"../assets/productthumbnails/ornaments/TibbsOrnamentPlate.jpg_thumbnail.jpg"} 
                        alt={"product image"} />
                    
                </div>
                <div className="arrivals_img">
                    <img
                        src={"../assets/productthumbnails/ornaments/MummersOrnamentPlate.jpg_thumbnail.jpg"} 
                        alt={"product image"} >
                    </img>
                </div>
                <div className="arrivals_img">
                    <img
                        src={"../assets/productthumbnails/ornaments/YesbyOrnamentPlate.jpg_thumbnail.jpg"} 
                        alt={"product image"} >
                    </img>
                </div>
            </div>
        </section>)
}

export default LatestArrivals