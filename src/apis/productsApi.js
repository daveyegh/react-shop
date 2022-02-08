import axios from "axios";

const getProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products?limit=100");
    const products = await result.data;
    return products;
};

export {
    getProducts
}