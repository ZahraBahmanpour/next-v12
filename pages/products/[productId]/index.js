import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <h1>Product Details</h1>
      {productId}
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
