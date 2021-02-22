import React from 'react';
import Footer from "../../component/Footer";
import ProductSlide from "./Products/ProductSlide";
import NavbarShopping from "./NavbarShopping";
import ProductFooter from "./ProductFooter";

const ProductAddress = () => {





    return (


        <div className="productAddressParent">
            <NavbarShopping/>

            <ProductSlide></ProductSlide>

            <div className="productAddress">
                <h1>Hаш адресс</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.87486147409345!2d69.20588193350014!3d41.33906267592223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8df6fa52aa0b%3A0xf86311dd5e03a553!2sCity%20LED!5e0!3m2!1sru!2s!4v1612335690132!5m2!1sru!2s"
                       frameBorder="0"   allowFullScreen="" aria-hidden="false"
                    tabIndex="0"></iframe>
            </div>
            <ProductFooter></ProductFooter>
        </div>
    );
}
export default ProductAddress;