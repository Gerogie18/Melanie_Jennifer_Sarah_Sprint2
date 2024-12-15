import { useNavigate } from "react-router-dom";
import ShopButton from './ShopButton'

// function MyButton() {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate("/shop");
//   };

//   return <button onClick={handleButtonClick}>Shop all</button>;
// }

function CategorySection() {
  const navigate = useNavigate();

  
  const handleImageClick = (id) => {
    navigate(`/category/${id}`);
    //navigate(`/product/${productId}`);
  };

  return (
    <section id="category_section">
      <h1>Categories</h1>
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
      <div className="category_img_container">
        <div className="category_img">
          <img
            src={
              "../assets/thumbnails/brooches/PuffinBroochPlate2_thumbnail.jpg"
            }
            alt={"product image"}
            onClick={() => handleImageClick("0")}
          ></img>
        </div>
        <div className="category_img">
          <img
            src={
              "../assets/thumbnails/earrings/MoonkittiesEarringCard_thumbnail.jpg"
            }
            alt={"product image"}
            onClick={() => handleImageClick("1")}
          ></img>
        </div>
        <div className="category_img">
          <img
            src={
              "../assets/thumbnails/keychains/RottedKeychainPlateTag_thumbnail.jpg"
            }
            alt={"product image"}
            onClick={() => handleImageClick("2")}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
