import { useNavigate } from 'react-router-dom';

function ShopButton() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/shop");
  };

  return <button onClick={handleButtonClick}>Shop all</button>;
}
  

export default ShopButton;

