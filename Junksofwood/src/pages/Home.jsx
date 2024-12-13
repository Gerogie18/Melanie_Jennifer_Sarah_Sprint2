// This will have lots of links to get to a (possibly filtered) version of the shop page. 
import HeroImage from "../components/homecomponents/HeroImage";
import CategorySection from "../components/homecomponents/CategorySection";
import LatestArrivals from "../components/homecomponents/LatestArrivals";

const Home = () => {
  return (
    <div>
      <HeroImage></HeroImage>
       <LatestArrivals></LatestArrivals>
      <CategorySection></CategorySection>
     
    </div>
    )
};

export default Home;