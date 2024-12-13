function CategorySection(){

    return (
        <section id="category_section">
            <h1>Categories</h1>
            <div className="descrpt"><p>Words go here, Melanie needs to think of Words<br></br>
            Lots of words Lots of words Lots of words Lots of words Lots of words <br></br> Lots of words Lots of words Lots of words Lots of words Lots of words <br></br>Lots of words Lots of words Lots of words Lots of words</p>
                </div>
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