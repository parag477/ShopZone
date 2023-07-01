import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { 
    FaFacebook, 
    FaTwitter, 
    FaInstagram, 
    FaLinkedin, 
    FaPinterest, 
    FaCartPlus 
} from "react-icons/fa";
import Prod from "../../assets/products/earbuds-prod-1.webp";
import "./SingleProduct.scss";

const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={Prod} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">product details</span>
                        <span className="price">Price</span>
                        <span className="desc">Product Description</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                            <FaCartPlus size={20} />
                                Add to Cart
                            </button>
                        </div>

                        <span className="divider" />

                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>Headphones</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebook size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedin size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
