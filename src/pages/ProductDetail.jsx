import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useSelector((s) => s.product);
  const product = products.find((p) => p.id === +id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <p className="text-xl">Product not found.</p>
      </div>
    );
  }

  const {
    name,
    image,
    product_images,
    short_desc,
    price,
    discount_amount,
    stock,
    code,
    category: { name: categoryName },
  } = product;

  const finalPrice = discount_amount
    ? price - Number(discount_amount)
    : price;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-6 text-indigo-600 hover:underline"
      >
        ← Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* IMAGE GALLERY */}
        <div>
          <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src={`https://admin.refabry.com/storage/product/${image}`}
              alt={name}
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>

          {product_images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product_images.map((img) => (
                <div
                  key={img.id}
                  className="h-20 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    src={`https://admin.refabry.com/storage/product/${img.name}`}
                    alt={`${name} thumbnail`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold">{name}</h1>

          {/* Price / Discount */}
          <div className="flex items-baseline space-x-3">
            {discount_amount ? (
              <>
                <span className="text-2xl font-bold text-red-600">
                  ${finalPrice.toLocaleString()}
                </span>
                <span className="line-through text-gray-500">
                  ${price.toLocaleString()}
                </span>
                <span className="bg-red-100 text-red-800 text-sm py-1 px-2 rounded">
                  Save ${discount_amount}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold">${price.toLocaleString()}</span>
            )}
          </div>

          {/* Category, SKU, Stock */}
          <ul className="text-gray-700 space-y-1">
            <li>
              <strong>Category:</strong> {categoryName}
            </li>
            <li>
              <strong>SKU:</strong> {code}
            </li>
            <li>
              <strong>In Stock:</strong>{' '}
              {stock > 0 ? (
                <span className="text-green-600">{stock} available</span>
              ) : (
                <span className="text-red-600">Out of stock</span>
              )}
            </li>
          </ul>

          {/* Short Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Product Details</h2>
            <div className="max-h-48 overflow-y-auto p-4 bg-gray-50 rounded text-gray-800 whitespace-pre-line">
              {short_desc}
            </div>
          </div>

        
         
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
