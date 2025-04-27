import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  return (
    <div className="p-6 flex flex-col items-center">
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="w-80 h-80 object-cover mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
