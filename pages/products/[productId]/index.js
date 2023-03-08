import Head from "next/head";
import { useRouter } from "next/router";

export default function ProductDetail({ product }) {
  const router = useRouter();
  const productId = router.query.productId;
  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
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

// export async function getStaticPaths() {
//   const res = await fetch(
//     "https://6300a18859a8760a757d441c.mockapi.io/products"
//   );
//   const data = await res.json();

//   const paths = data.products.map((product) => {
//     return { params: { productId: product.id } };
//   });

//   return { paths, fallback: true };
// }

// export async function getStaticProps(context) {
//   const { params } = context;
//   console.log(context);
//   const res = await fetch(
//     "https://6300a18859a8760a757d441c.mockapi.io/products/" + params.productId
//   );
//   const data = await res.json();
//   return { props: { product: data } };
// }

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req.headers);
  res.setHeader("Set-Cookie", ["name=Sahra"]);
  const response = await fetch(
    "https://6300a18859a8760a757d441c.mockapi.io/products/" + params.productId
  );
  const data = await response.json();
  return { props: { product: data } };
}
