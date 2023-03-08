import { useRouter } from "next/router";

export default function ProductDetail({ product }) {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <h1>Product Details</h1>
      {productId}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Buy
      </button>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://6300a18859a8760a757d441c.mockapi.io/products"
  );
  const data = await res.json();

  const paths = data.products.map((product) => {
    return { params: { productId: product.id } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(context);
  const res = await fetch(
    "https://6300a18859a8760a757d441c.mockapi.io/products/" + params.productId
  );
  const data = await res.json();
  return { props: { product: data } };
}
