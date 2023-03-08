import ProductCard from "@/components/ProductCard";

export default function Products({ products }) {
  console.log(products);
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <ProductCard {...p} key={p.id} />
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://6300a18859a8760a757d441c.mockapi.io/products"
  );
  const data = await res.json();
  return { props: { products: data.products } };
}
