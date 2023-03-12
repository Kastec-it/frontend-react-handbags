import React from "react";
import Products from "../../Modules/Products/Products";
import './main-products.css'
import bag_one from "../../../assets/bag_1.png";
import bag_two from "../../../assets/bag_2.png";
import bag_three from "../../../assets/bag_3.png";
import bag_four from "../../../assets/bag_4.png";



export default function MainProducts() {
    return (
        <main-product>
            <Products
                label="Best seller"
                img={bag_one}
                title="The handy bag"
                price={400}
            />
            <Products
                label="Best seller"
                img={bag_two}
                title="The stylish bag"
                price={250}
            />
            <Products
                label="New collection"
                img={bag_three}
                title="The simple bag"
                price={300}
            />
            <Products
                label="New collection"
                img={bag_four}
                title="The trendy bag"
                price={150}
            />
        </main-product>
    )
}
