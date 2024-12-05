// This will be where people can browse, search for, and select different products.
// (Once they select a different product, this will lead to the product page)
import { Link } from "react-router-dom";

function Shop(){

    return(
        <div>
            <h1>Shop</h1>
            <p>This is the shop</p>
            <p>We can link to product categories maybe?</p>
            <Link to="/product">Categories</Link>
        </div>
    )
}

export default Shop