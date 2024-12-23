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
    navigate(`/shop?cat=${id}`);
    //navigate(`/product/${productId}`);
  };

  return (
    <section id="category_section">
      <h1>Our products</h1>
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
          <p className='category_titles'>brooches</p>
        </div>
        <div className="category_img">
          <img
            src={
              "../assets/thumbnails/earrings/MoonkittiesEarringCard_thumbnail.jpg"
            }
            alt={"product image"}
            onClick={() => handleImageClick("1")}
          ></img>
          <p className='category_titles'>earrings</p>
        </div>
        <div className="category_img">
          <img
            src={
              "../assets/thumbnails/keychains/RottedKeychainPlateTag_thumbnail.jpg"
            }
            alt={"product image"}
            onClick={() => handleImageClick("2")}
          ></img>
          <p className='category_titles'>keychains</p>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
