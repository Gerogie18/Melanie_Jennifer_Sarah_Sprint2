function CategorySection(){

    return (
        <section id="category_section">
            <h2>Category Section</h2>
            <div className="category_img_container">
                <div className="category_img">
                    <img
                        src={"../assets/productthumbnails/brooches/PuffinBroochPlate2.jpg_thumbnail.jpg"} 
                        alt={"product image"} >
                    </img>
                </div>
                <div className="category_img">
                    <img
                        src={"../assets/productthumbnails/earrings/MoonkittiesEarringCard.jpg_thumbnail.jpg"} 
                        alt={"product image"} >
                    </img>
                </div>
                <div className="category_img">
                    <img
                        src={"../assets/productthumbnails/keychains/RottedKeychainPlateTag.jpg_thumbnail.jpg"} 
                        alt={"product image"} >
                    </img>
                </div>
            </div>
        </section>)
}

export default CategorySection