function HeroImage() {
    return (
        <section id="hero-image" role="region" aria-labelledby="hero-image-heading">
            <div className="hero_img_container" role="img container" aria-label="Hero image container">
                <div className="hero_img">
                    <img
                        src={"/assets/marketingimages/meghanphotoshoot/meghannewfoundland.jpg"}
                        alt={"Image of Model in front of red and yellow building wearing Junks of Wood Newfoundland Earrings"}
                        role="hero-img"
                        aria-label="Model in front of red and yellow building wearing Junks of Wood Newfoundland Earrings"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroImage;