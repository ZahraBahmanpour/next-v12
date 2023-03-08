import { products } from "@/data/products";

export default function handler(req, res) {
  if (req.method === "POST") {
    const product = req.body.product;
    const newProduct = {
      id: 6,
      createdAt: new Date().toDateString(),
      ...product,
    };
    products.push(newProduct);
    console.log(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.status(200).json(products);
  }
}
