const Product = require("./Product.mongo");

export async function createProduct(product) {
    const newProduct = new Product(product);
    return newProduct.save();
}