import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

export default function Products({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    const getFilteredProducts = async () => {
      const res = await fetch(
        "https://6300a18859a8760a757d441c.mockapi.io/products?name=" +
          filterText
      );
      const data = await res.json();
      setFilteredProducts(data.products);
    };
    getFilteredProducts();
  }, [filterText]);
  return (
    <>
      <h1>Products</h1>
      <input
        type={"text"}
        placeholder="enter name..."
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
      />
      <ul>
        {filteredProducts.map((p) => (
          <ProductCard {...p} key={p.id} />
        ))}
      </ul>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://6300a18859a8760a757d441c.mockapi.io/products"
//   );
//   const data = await res.json();
//   return { props: { products: data.products } };
// }

export async function getServerSideProps() {
  const res = await fetch(
    "https://6300a18859a8760a757d441c.mockapi.io/products"
  );
  const data = await res.json();
  return { props: { products: data.products } };
}
