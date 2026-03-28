import type { Product } from "../../types/models/Product";

function ProductCard({
  image,
  description,
  price,
  rating,
  discount = 0,
}: Product) {
  return (
    <div className="w-[234px] border-2 border-amber-700 relative">
      <img src={image} alt="" />
      <div className="space-y-2">
        <p>{"⭐".repeat(rating)}</p>
        <p className="text-base/tight text-gray-500">{description}</p>
        <h2 className="font-bold text-blue-400">
          {discount > 0 && (
            <span className="line-through font-light text-gray-500">
              £{price}
            </span>
          )}{" "}
          £{(price * (1 - discount / 100)).toFixed(2)}
        </h2>
      </div>
      {discount > 0 && (
        <span className="bg-amber-400 font-bold px-2 py-1 text-xs rounded-sm absolute top-3 left-3">
          {discount}% OFF
        </span>
      )}
    </div>
  );
}

export default ProductCard;
