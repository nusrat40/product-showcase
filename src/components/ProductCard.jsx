import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const hasDiscount = product.discount_amount && +product.discount_amount > 0;
  const finalPrice = hasDiscount
    ? product.price - Number(product.discount_amount)
    : product.price;

  return (
    <Link
      to={`/product/${product.id}`}
      className="relative block bg-white rounded-2xl shadow hover:shadow-lg transform hover:-translate-y-1 transition p-4"
    >
      {hasDiscount && (
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          –{product.discount_amount}৳
        </div>
      )}

      <div className="h-48 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="max-h-full object-contain"
          loading="lazy"
        />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
        {product.name}
      </h2>

      <div className="flex items-baseline space-x-2">
        <span className="text-xl font-bold text-gray-900">
          ${finalPrice.toLocaleString()}
        </span>
        {hasDiscount && (
          <span className="text-sm line-through text-gray-400">
            ${product.price.toLocaleString()}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
