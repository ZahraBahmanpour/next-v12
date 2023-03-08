import Link from "next/link";

function ProductCard({ id, name }) {
  return (
    <li>
      <Link href={`/products/${id}`}>{name}</Link>
    </li>
  );
}

export default ProductCard;
