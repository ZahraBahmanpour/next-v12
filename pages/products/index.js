import Link from "next/link";

export default function Products({ products }) {
  console.log(products);
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li>
            <Link href={`/products/${p.id}`}>{p.name}</Link>
          </li>
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
