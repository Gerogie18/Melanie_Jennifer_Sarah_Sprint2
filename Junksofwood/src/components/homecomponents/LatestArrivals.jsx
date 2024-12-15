import { useNavigate } from "react-router-dom";
import ShopButton from './ShopButton'

function LatestArrivals() {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };
  
  return (
    <section id="latest_arrivals" role="region" aria-labelledby="latest_arrivals_heading">
      <h1 id="latest_arrivals_heading">Our Latest Arrivals</h1>
      <div className="descrpt">
        <p>
          Words go here, Melanie needs to think of Words<br></br>
          Lots of words Lots of words Lots of words Lots of words Lots of words{" "}
          <br></br> Lots of words Lots of words Lots of words Lots of words Lots
          of words <br></br>Lots of words Lots of words Lots of words Lots of
          words
        </p>
        <ShopButton />
      </div>

      <div className="arrivals_img_container">
        <div className="arrivals_img">
          <img aria-label={"img"}
            src={
              "../assets/thumbnails/ornaments/TibbsOrnamentPlate_thumbnail.jpg"
            }
            alt={"product image"}
            onClick={() => handleImageClick("48")}
          />
        </div>
        <div className="arrivals_img">
          <img role={'img'} aria-label={'img'}
            src={
              "../assets/thumbnails/ornaments/MummersOrnamentPlate_thumbnail.jpg"
            }
            alt={"product image"}
            onClick={() => handleImageClick("45")}
          ></img>
        </div>
        <div className="arrivals_img">
          <img aria-label={"img"}
            src={
              "../assets/thumbnails/ornaments/YesbyOrnamentPlate_thumbnail.jpg"
            }
            alt={"product image"}
            onClick={() => handleImageClick("50")}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default LatestArrivals;
